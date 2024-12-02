import React from 'react'

function Card({ titulo, categ, precio }) {
    return (
        <>
            <h2>{titulo}</h2>
            <p>Categoria: {categ}</p>
            <p>Precio: {precio}</p>
        </>
    )
}

export default Card