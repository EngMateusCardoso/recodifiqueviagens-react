import React from "react";
import CardDestino from "./CardDestino";
import BuenosIMG from "../../../assets/img/Destinos/Buenos-Aires_01.jpg"
import EgitoIMG from "../../../assets/img/Destinos/Egito_01.jpg"
import GramadoIMG from "../../../assets/img/Destinos/Gramado_RS_01.jpg"
import IndiaIMG from "../../../assets/img/Destinos/Índia_01.jpg"
import MoscowIMG from "../../../assets/img/Destinos/Moscow_01.jpg"
import NoronhaIMG from "../../../assets/img/Destinos/Noronha_01.jpg"
import OrlandoIMG from "../../../assets/img/Destinos/Orlando_01.jpg"
import OuroPretoIMG from "../../../assets/img/Destinos/Ouro_Preto_01.jpeg"
import ParisIMG from "../../../assets/img/Destinos/Paris_01.jpg"
import RioIMG from "../../../assets/img/Destinos/Rio_01.jpg"
import SalvadorIMG from "../../../assets/img/Destinos/Salvador_01.jpg"
import SydneyIMG from "../../../assets/img/Destinos/Sydney_01.jpg"

const CardDestinos = () => {
    return (
        <>
            <CardDestino nome="Buenos-Aires" nome2="#Buenos-Aires" imagem={BuenosIMG} nacionalidade="internacional"></CardDestino>
            <CardDestino nome="Egito" imagem={EgitoIMG} nacionalidade="internacional" nome2="#Egito"></CardDestino>
            <CardDestino nome="Gramado" imagem={GramadoIMG} nacionalidade="Nacional" nome2="#Gramado"></CardDestino>
            <CardDestino nome="Índia" imagem={IndiaIMG} nacionalidade="internacional" nome2="#Índia"></CardDestino>
            <CardDestino nome="Moscow" imagem={MoscowIMG} nacionalidade="internacional" nome2="#Moscow"></CardDestino>
            <CardDestino nome="Noronha" imagem={NoronhaIMG} nacionalidade="Nacional" nome2="#Noronha"></CardDestino>
            <CardDestino nome="Orlando" imagem={OrlandoIMG} nacionalidade="internacional"
            nome2="#Orlando"></CardDestino>
            <CardDestino nome="Ouro-Preto" imagem={OuroPretoIMG} nacionalidade="Nacional"
            nome2="#Ouro-Preto"></CardDestino>
            <CardDestino nome="Paris" imagem={ParisIMG} nacionalidade="internacional" nome2="#Paris"></CardDestino>
            <CardDestino nome="Rio" imagem={RioIMG} nacionalidade="Nacional" nome2="#Rio"></CardDestino>
            <CardDestino nome="Salvador" imagem={SalvadorIMG} nacionalidade="Nacional" nome2="#Salvador"></CardDestino>
            <CardDestino nome="Sydney" imagem={SydneyIMG} nacionalidade="internacional"
            nome2="#Sydney"></CardDestino>
        </>
    )
}

export default CardDestinos;