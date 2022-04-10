import React from "react";

const Titulo = (props) => {
    return (
        <section className="container">
            <h1 className="my-4">{props.titulo}</h1>
        </section>
    )
}

export default Titulo;