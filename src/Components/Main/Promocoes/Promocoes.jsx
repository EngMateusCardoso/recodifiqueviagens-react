import React from "react";
import Titulo from "../MainComponents/Titulo";
import Texto from "../MainComponents/Texto";
import Cardpromo from "./Cardpromo";
import OrlandoIMG from "../../../assets/img/Destinos/Orlando_01.jpg";
import RioIMG from "../../../assets/img/Destinos/Rio_01.jpg";
import SalvadorIMG from "../../../assets/img/Destinos/Salvador_01.jpg";

export default () => {
    return (
        <div>
            <Titulo titulo="Promoções"></Titulo>
            <section className="container">
                <div className="row">
                    <div className="col-md">
                        <Texto titulo="Promoção tenha o melhor ano novo em família!"
                            apresentacao="Economize na sua viagem parano o ano novo em Orlando. Leve as crianças para conhecer o Mickey, Pateta e muita mais!"></Texto>
                    </div>
                    <div className="col-md">
                        <Cardpromo imagem={OrlandoIMG} Nome="Orlando" desconto="5"></Cardpromo>
                    </div>
                    <hr />
                </div>
            </section>

            <section className="container">
                <div className="row">
                    <div className="col-md">
                        <Cardpromo imagem={RioIMG} Nome="Rio de Janeiro" desconto="15"></Cardpromo>
                    </div>
                    <div className="col-md">
                        <Texto titulo="Melhor Réveillon do Brasil"
                            apresentacao="Já se imaginou passando o Réveillon na cidade maravilhosa? Corra para essa incrível promoção por tempo limitado!"></Texto>
                    </div>
                    <hr />
                </div>
            </section>

            <section className="container">
                <div className="row">
                    <div className="col-md">
                        <Texto titulo="Carnaval em Salvador"
                            apresentacao="Economize reservando a sua vaga no melhor Carnaval do Mundo!"></Texto>
                    </div>
                    <div className="col-md">
                        <Cardpromo imagem={SalvadorIMG} Nome="Salvador" desconto="25"></Cardpromo>
                    </div>
                    <hr />
                </div>
            </section>

        </div>
    )
}