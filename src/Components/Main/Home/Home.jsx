import React from "react";
import Titulo from "./../MainComponents/Titulo";
import viajante from "./../../../assets/img/Imagens_Home/Home_Mesa_de_viagens.jpg";

const Home = () => {
    return (
        <div>
            <Titulo titulo="Sobre a Recodifique Viagens"></Titulo>
            <section className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="text-end blockquote"> Recodifique Viagens é uma agência de viagens fictícia para avaliação do curso de Fullstack da Recode</h2>
                        <p className="text-end">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus rerum dolore cum similique at corrupti pariatur aliquid harum quis. Vel id tempora error, unde odio dolore officia consequatur pariatur deleniti?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta blanditiis non harum quasi. Placeat quis perferendis eligendi illum minus, dicta corporis harum odio est inventore fugit consectetur eos? Modi, saepe!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur fugit eum dolorem dolore harum debitis aspernatur distinctio accusantium recusandae quam explicabo commodi qui porro, aliquam, obcaecati sapiente similique sed asperiores?
                        </p>
                    </div>
                    <div className="col">
                        <img className="img-fluid" src={viajante} alt="Mesa de viajante" width="500" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;