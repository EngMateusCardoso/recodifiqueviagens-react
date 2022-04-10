import React from 'react'
import { useRef } from 'react'
import { useParams } from "react-router-dom";
import Titulo from '../MainComponents/Titulo'
import api from '../../../api';

const EditarMensagens = () => {

    const {id} = useParams();
    const nomeDeContato = useRef();
    const email = useRef();
    const msg = useRef();
    const aceitaReceberNot = useRef();

    function atualizarContato(event) {
        event.preventDefault()
        api.put(`/Contato/${id}`, {
            nomeDeContato: nomeDeContato.current.value,
            email: email.current.value,
            msg: msg.current.value,
            aceitaReceberNot: aceitaReceberNot.current.checked
        }).then(res => window.location.href = "http://localhost:3000/ListaMensagens")
            .catch(err => console.log(err))
    }

    return (
        <section className="container">
            <Titulo titulo="Atualizar mensagem de contato"></Titulo>
            <form className="border rounded-3 p-4" onSubmit={atualizarContato}>
                {/*Contato*/}
                <div className="mb-2 row">
                    {/*Nome usado para contato*/}
                    <div className="col-2">
                        <label className="form-label">Id:</label>
                        <br/>
                        <label className="form-label">{id}</label>
                    </div>
                    {/*Nome usado para contato*/}
                    <div className="col-4">
                        <label className="form-label">Atualizar o nome para:</label>
                        <input type="text" className="form-control form-control-sm" ref={nomeDeContato} />
                    </div>
                    {/*E-mail*/}
                    <div className="col">
                        <label className="form-label">Atualizar e-mail para:</label>
                        <input type="email" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="name@example.com" ref={email} />
                        <div id="emailHelp" className="form-text">Nunca compartilharemos seu e-mail com mais ninguém</div>
                    </div>
                </div>
                {/*Mensagem*/}
                <div className="mb-2">
                    <label className="form-label">Atualizar Mensagem para </label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" ref={msg} ></textarea>
                </div>
                <div className="mb-2 form-check">
                    <input type="checkbox" className="form-check-input" ref={aceitaReceberNot} />
                    <label className="form-check-label" >Aceito receber notificações por e-mail</label>
                </div>
                <input type="submit" className="btn btn-primary" value="Update" style={{ backgroundColor: '#6e44ff' }} />
            </form>
        </section>
    )
}

export default EditarMensagens;