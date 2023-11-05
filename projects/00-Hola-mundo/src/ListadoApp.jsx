import { useState } from "react"


const Items = ({ nombre, visto }) => {
    return (
        <li>
            {nombre}
            {visto ? '✅' : '❌'}
        </li>
    )
}

export const ListadoApp = () => {
    let listadoSecciones = [
        { nombre: "nombre0", visto: true },
        { nombre: "nombre2", visto: false },
        { nombre: "nombre3", visto: true },
        { nombre: "nombre4", visto: false },
        { nombre: "nombre5", visto: true },
        { nombre: "nombre6", visto: true },
    ]
const [arreglo,setArreglo] = useState(listadoSecciones)
    return (
        <>
            <h1>Lista de temas</h1>
            <ul>
                {arreglo.map(item => <Items key={item.nombre} nombre={item.nombre} visto={item.visto}></Items>)}
            </ul>
        </>
    )

}