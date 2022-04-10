import React from "react";

const Texto = (props) => {
    return (
        <>
            <h2 className="text-end">{props.titulo} </h2>
            <p className="text-end">
                {props.apresentacao}
            </p>
            <p className="text-end">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus rerum dolore cum similique at corrupti pariatur aliquid harum quis. Vel id tempora error, unde odio dolore officia consequatur pariatur deleniti?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta blanditiis non harum quasi. Placeat quis perferendis eligendi illum minus, dicta corporis harum odio est inventore fugit consectetur eos? Modi, saepe!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur fugit eum dolorem dolore harum debitis aspernatur distinctio accusantium recusandae quam explicabo commodi qui porro, aliquam, obcaecati sapiente similique sed asperiores?
            </p>
        </>
    )
}

export default Texto;