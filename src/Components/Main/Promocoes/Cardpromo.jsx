import React from "react";
import api from '../../../api';
import { useRef } from "react";

export default (props) => {

    const nome = useRef();
    const destino = useRef();
    const telefone = useRef();
    const formaPagamento = useRef();

    function enviarAgendamento(event) {
        event.preventDefault()
        api.post('/Agendamento', {
            nome: nome.current.value,
            destino: destino.current.alt,
            telefone: telefone.current.value,
            formaPagamento: formaPagamento.current.value
        }).then(res => window.location.reload())
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="shadow-lg card border border-white border-5" style={{ width: 400 }}>
                <div>
                    <img className="card-img-top" src={props.imagem} alt={props.nome} />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        -{props.desconto}%
                        <span className="visually-hidden">Promoção</span>
                    </span>
                </div>
                <h5 className="card-title">Ano novo em {props.nome}</h5>
                <p className="old_value_promo mb-0">R$ XX,XXX</p>
                <p className="card-text mt-0">R$ XX,XXX</p>
                <button type="button" className="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target={props.nome2}>Reserve agora!</button>


            </div>

            {/*Inicio do Modal */}
            <div className="modal fade" id={props.nome} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Agendar vaga para: {props.nome}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        {/*Inicio do form */}
                        <form onSubmit={enviarAgendamento}>

                            <div className="modal-body">
                                <label className="form-label">Informe seu nome: </label>
                                <input type="text" className="form-control form-control-sm" ref={nome} />
                                <label className="form-label">Telefone</label>
                                <input type="text" className="form-control form-control-sm" placeholder="(99) 9 9999-9999" ref={telefone} />
                                <br />
                                <label className="form-label">Forma de Pagamento:</label>
                                <input type="text" className="form-control form-control-sm" placeholder="Ex.: PIX, Boleto, Cartão de Crédito" ref={formaPagamento} />
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Desistir</button>
                                <button type="submit" className="btn btn-primary">Agendar</button>
                            </div>

                        </form>
                        {/*Fim do form */}
                    </div>

                </div>
            </div>
            {/*Fim do modal */}
        </>
    )
}