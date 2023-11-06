/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars

import { useState } from "react"
import { AddTask } from "./AddTask"

const Items = ({ nombre, visto }) => {
    return (
        <li>
            {nombre}
            {/*condicioneal ternario*/}
            {visto ? '✅' : '❌'}
        </li>
    )
}

export const ListadoApp = () => {
    let listadoSecciones = [
        { id: 1, nombre: "nombre0", visto: true },
        { id: 2, nombre: "nombre2", visto: false },
        { id: 3, nombre: "nombre3", visto: true },
        { id: 4, nombre: "nombre4", visto: false },
        { id: 5, nombre: "nombre5", visto: true },
        { id: 6, nombre: "nombre6", visto: true },
    ]
    const [arreglo, setArreglo] = useState(listadoSecciones)

    const onAddTask = (val) => {
        let valor = val.trim;
        if (valor < 1) return
        const send = {
            id: arreglo.length + 1,
            nombre: valor,
            visto: false
        }
        setArreglo([...arreglo, send])
    }

    return (
        <>
            <h1>Lista de temas</h1>
            <AddTask addTask={onAddTask}></AddTask>
            <ol>
                {arreglo.map(item => <Items key={item.id} nombre={item.nombre} visto={item.visto}></Items>)}
            </ol>
        </>
    )

}