import React from "react";
import { Link } from "react-router-dom";
import Titulo from "../MainComponents/Titulo";
import ContatoForm from "./ContatoForm";


export default () => {
    return (
        <div>
            <section className="container">
                <Titulo titulo="Contato"></Titulo>
                {/*Início do formulário*/}
                <ContatoForm></ContatoForm>
            </section>
            {/*Fim do formulário*/}
            <section className="container">
                <h2 className="my-4">Administração</h2>
                <div className="row justify-content-center">
                    <button className="btn btn-secondary col-4 mx-1" style={{ backgroundColor: '#6e44ff'}}>
                        <Link to="/ListaAgendamentos">
                            <p>Agendamentos</p>
                        </Link>
                    </button>
                    <button className="btn btn-secondary col-4 mx-1" style={{ backgroundColor: '#6e44ff'}}>
                        <Link to="/ListaMensagens">
                            <p>Mensagens</p>
                        </Link>
                    </button>
                </div>
            </section>
        </div>
    )
}