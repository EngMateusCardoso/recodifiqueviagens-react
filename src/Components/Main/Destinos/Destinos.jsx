import React from "react";
import Titulo from "../MainComponents/Titulo";
import CardsDestinos from "./CardsDestinos";

const Destinos = () => {
    
    return (
        <>
            {/*Titulo*/}
            <Titulo titulo="Destinos"></Titulo>
            {/*Destinos*/}
            <section className="container">
                <div className="row justify-content-md-center">
                    {/*Menu dos Destinos*/}
                    <div className="col-md-auto border">
                        <h4>Categorias</h4>
                        <ul>
                            <li>Nacionais (5)</li>
                            <li>Internacionais (7)</li>
                            <li>Todos (12)</li>
                        </ul>
                    </div>
                    {/*grid de destinos*/}
                    <div className="col">
                        <div className="row g-3">
                            <CardsDestinos></CardsDestinos>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Destinos;