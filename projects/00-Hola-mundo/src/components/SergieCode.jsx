/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { AddTask } from "./AddTask";

export const SergiCode = ({ value }) => {
    const [contador, setContador] = useState(value);

    function handleClick() {
        console.log("tocando boton ", value , contador);
        setContador(contador + 1);
    }

    return (
        <>
            {/* <h1>Contador</h1>
            <button onClick={function (event) {console.log(event)}}> Tocame </button> */}
            {/* creando la funcion afuera:
            <button onClick={(event) => handleClick(event)}> tocame </button> 
            y la forma correcta resumida paracuando solo hay un parametro ,abajo*/}
            <h1>Contador:</h1>
            <p>{contador}</p>
            <button onClick={handleClick}> tocame </button>
        </>
    )
}