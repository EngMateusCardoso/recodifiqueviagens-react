import React from "react";
import Titulo from '../MainComponents/Titulo'
import editar from '../../../assets/img/Icones/Icon_Edit.png'
import trash from '../../../assets/img/Icones/Icon_Trash.png'

export default () => {
    return (
        <section className="container">
            <Titulo titulo="Lista de Agendamentos"></Titulo>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">msg</th>
                        <th scope="col">Aceita Receber Not.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><a><img src={editar} alt="Editar" width="20px"/></a></td>
                        <td><a><img src={trash} alt="Editar" width="20px"/></a></td>
                    </tr>
                </tbody>
            </table>

        </section>
    )
}
