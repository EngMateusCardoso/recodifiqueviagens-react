import React from "react";

export default (props) => {
    return (
        <>
            <div className="shadow-lg card border border-white border-5" style={{ width: 400 }}>
                <div>
                    <img className="card-img-top" src={props.imagem} alt={props.nome}/>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        -{props.desconto}%
                        <span className="visually-hidden">Promoção</span>
                    </span>
                </div>
                <h5 className="card-title">Ano novo em {props.nome}</h5>
                <p className="old_value_promo mb-0">R$ XX,XXX</p>
                <p className="card-text mt-0">R$ XX,XXX</p>
                <button onclick="editarmodal('Orlando')" type="button" className="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#Modal">Reserve agora!</button>
            </div>
        </>
    )
}