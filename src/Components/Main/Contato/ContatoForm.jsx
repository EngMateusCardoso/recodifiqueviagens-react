import React from "react";
import api from '../../../api';
import { useRef } from "react";

function ContatoForm() {

    const nomeDeContato = useRef();
    const email = useRef();
    const msg = useRef();
    const aceitaReceberNot = useRef();

    function enviarContato(event) {
        event.preventDefault()

        api.post('/Contato', {
            nomeDeContato: nomeDeContato.current.value,
            email: email.current.value,
            msg: msg.current.value,
            aceitaReceberNot: aceitaReceberNot.current.checked
        }).then(res => window.location.reload())
        .catch(err => console.log(err))
    }

    return (
        <form className="border rounded-3 p-4" onSubmit={enviarContato}>
            {/*Contato*/}
            <div className="mb-2 row">
                {/*Nome usado para contato*/}
                <div className="col-5">
                    <label className="form-label">Informe o seu nome:</label>
                    <input type="text" className="form-control form-control-sm" ref={nomeDeContato} />
                </div>
                {/*E-mail*/}
                <div className="col">
                    <label className="form-label">Endereço de e-mail</label>
                    <input type="email" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="name@example.com" ref={email} />
                    <div id="emailHelp" className="form-text">Nunca compartilharemos seu e-mail com mais ninguém</div>
                </div>
            </div>
            {/*Mensagem*/}
            <div className="mb-2">
                <label className="form-label">Mensagem</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" ref={msg} ></textarea>
            </div>
            <div className="mb-2 form-check">
                <input type="checkbox" className="form-check-input"  ref={aceitaReceberNot} />
                <label className="form-check-label">Aceito receber notificações por e-mail</label>
            </div>
            <input type="submit" className="btn btn-primary" value="Enviar" style={{ backgroundColor: '#6e44ff' }}/>
        </form>
    )
}

export default ContatoForm;