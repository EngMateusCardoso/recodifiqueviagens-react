import React from "react";

export default (props) => {
    return (
        <div className="col-md" id={props.nacionalidade}>
            <div className="shadow-lg card border border-white border-5" style={{ width: 175}}>
                <img className="card-img-top" src={props.imagem} alt={props.nome}/>
                    <h5 className="card-title">{props.nome}</h5>
                    <p className="card-text">R$ XX,XXX</p>
                    <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#Modal">Reserve agora!</button>
            </div>
        </div>
    )
}