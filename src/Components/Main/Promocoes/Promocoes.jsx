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
                        <Cardpromo imagem={OrlandoIMG} nome="Orlando" desconto="5" nome2="#Orlando"></Cardpromo>
                    </div>
                    <hr />
                </div>
            </section>

            <section className="container">
                <div className="row">
                    <div className="col-md">
                        <Cardpromo imagem={RioIMG} nome="Rio" desconto="15" nome2="#Rio"></Cardpromo>
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
                        <Cardpromo imagem={SalvadorIMG} nome="Salvador" desconto="25" nome2="#Salvador"></Cardpromo>
                    </div>
                    <hr />
                </div>
            </section>

        </div>
    )
}