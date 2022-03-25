import React from 'react'
import { useRef } from 'react'
import { useParams } from "react-router-dom";
import Titulo from '../MainComponents/Titulo'
import api from '../../../api';

export default () => {

    const {id} = useParams();
    const nome = useRef();
    const destino = useRef();
    const telefone = useRef();
    const formaPagamento = useRef();

    function atualizarAgendamento(event) {
        event.preventDefault(formaPagamento)
        api.put(`/Agendamento/${id}`, {
            nome: nome.current.value,
            destino: destino.current.value,
            telefone: telefone.current.value,
            formaPagamento: formaPagamento.current.value
        }).then(res => window.location.href = "http://localhost:3000/ListaAgendamentos")
            .catch(err => console.log(err))
    }

    return (
        <section className="container">
            <Titulo titulo="Atualizar agendamento"></Titulo>
            <form className="border rounded-3 p-4" onSubmit={atualizarAgendamento}>
                {/*Contato*/}
                <div className="mb-2 row">
                    {/*ID*/}
                    <div className="col-2">
                        <label className="form-label">Id:</label>
                        <br/>
                        <label className="form-label">{id}</label>
                    </div>
                    {/*Nome*/}
                    <div className="col-4">
                        <label className="form-label">Atualizar o nome para:</label>
                        <input type="text" className="form-control form-control-sm" ref={nome} />
                    </div>
                    {/*Destino*/}
                    <div className="col">
                        <label className="form-label">Atualizar destino para:</label>
                        <input type="text" className="form-control form-control-sm" ref={destino} />

                    </div>
                </div>
                {/*telefone e formadepagamento*/}
                <div className="mb-2 row">
                    <div className="col-6">
                        <label className="form-label">Atualizar o telefone para:</label>
                        <input type="text" className="form-control form-control-sm" ref={telefone} />
                    </div>

                    <div className="col">
                        <label className="form-label">Atualizar forma de pagamento para:</label>
                        <input type="text" className="form-control form-control-sm" ref={formaPagamento} />

                    </div> 
                </div>

                <input type="submit" className="btn btn-primary" value="Update" style={{ backgroundColor: '#6e44ff' }} />
            </form>
        </section>
    )
}