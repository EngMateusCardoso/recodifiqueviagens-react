import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import Titulo from '../MainComponents/Titulo'
import api from '../../../api'

import editar from '../../../assets/img/Icones/Icon_Edit.png'
import trash from '../../../assets/img/Icones/Icon_Trash.png'

export default () => {

    const [mensagemCadastrada, setMensagemCadastrada] = useState([])

    useEffect(() => {
        api.get('/Contato').then(res => setMensagemCadastrada(res.data)).catch(err => console.log(err))
    }, [])

    function deletar(img){
        api.delete(`/Contato/${img.target.id}`).then((res) => window.location.reload()).catch((err) => console.log(err))
    }

    return (
        <section className="container">
            <Titulo titulo="Lista de Mensagens"></Titulo>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">msg</th>
                        <th scope="col">Aceita Receber Not.</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mensagemCadastrada.map(mensagemCadastrada => (
                            <tr key={mensagemCadastrada.id_Msg}>
                                <th>{mensagemCadastrada.id_Msg}</th>
                                <td>{mensagemCadastrada.nomeDeContato}</td>
                                <td>{mensagemCadastrada.email}</td>
                                <td>{mensagemCadastrada.msg}</td>
                                <td>
                                    {mensagemCadastrada.aceitaReceberNot?'Aceito!':'Não aceito.'}
                                </td>
                                <td>
                                    <Link to="/EditarMensagens">
                                        <img src={editar} alt="Update" width="20px" id={mensagemCadastrada.id_Msg} />
                                    </Link>
                                </td>
                                <td>
                                    <img src={trash} alt="trash" width="20px" id={mensagemCadastrada.id_Msg} onClick={(img) => deletar(img)}/>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </section>
    )
}
