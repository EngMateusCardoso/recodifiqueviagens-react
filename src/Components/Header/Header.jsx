import React from "react";
import { Link } from "react-router-dom";
import logonav from '../../assets/img/Logos/Recodifique_Viagens_Logo_Branco-sem_fundo.png';

export default () => {
    return (
        <header>
            {/*<!--Minha NavBar (Barra de navegação)-->*/}
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#240046' }}>
                <div className="container">
                    <Link to="/"><img src={logonav} alt="Logo Recodifique Viagens" width="50" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active mx-4" aria-current="page">
                                    <p>Home</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Destinos" className="nav-link active mx-4" aria-current="page">
                                    <p>Destinos</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Promocoes" className="nav-link active mx-4" aria-current="page">
                                    <p>Promoções</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contato" className="nav-link active mx-4" aria-current="page">
                                    <p>Contato</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}