import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Titulo from '../MainComponents/Titulo'
import api from '../../../api'

import editar from '../../../assets/img/Icones/Icon_Edit.png'
import trash from '../../../assets/img/Icones/Icon_Trash.png'

const ListaAgendamentos = () => {

    const [Agendamento, setAgendamento] = useState([])

    useEffect(() => {
        api.get('/Agendamento').then(res => setAgendamento(res.data)).catch(err => console.log(err))
    }, [])

    function deletar(img) {
        api.delete(`/Agendamento/${img.target.id}`).then((res) => window.location.reload()).catch((err) => console.log(err))
    }

    return (
        <section className="container">
            <Titulo titulo="Lista de Agendamentos"></Titulo>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Destino</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Forma de pagamento</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Agendamento.map(Agendamento => (
                            <tr key={Agendamento.id_Agendamento}>
                                <th>{Agendamento.id_Agendamento}</th>
                                <td>{Agendamento.destino}</td>
                                <td>{Agendamento.nome}</td>
                                <td>{Agendamento.telefone}</td>
                                <td>{Agendamento.formaPagamento}</td>
                                <td>
                                    <Link className="btn" to={`/EditarAgendamentos/${Agendamento.id_Agendamento}`}>
                                        <img src={editar} alt="Update" width="20px" />
                                    </Link>
                                </td>
                                <td>
                                    <div className="btn">
                                        <img src={trash} alt="Editar" width="20px" id={Agendamento.id_Agendamento} onClick={(img) => deletar(img)} />
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </section>
    )
}

export default ListaAgendamentos;