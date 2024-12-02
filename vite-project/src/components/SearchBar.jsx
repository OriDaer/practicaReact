// src/components/SearchBar.jsx
import React, { useState, useEffect } from 'react';


function SearchBar({productos, filtro}) {
    const [buscarYfiltrar, setBuscaryFiltrar] = useState('');


    // Filtrar productos según la búsqueda y la categoría seleccionada
    const filteredProducts = productos
        .filter((product) =>
            product.title.toLowerCase().includes(buscarYfiltrar.toLowerCase())
        )
    console.log(filteredProducts)
    filtro(filteredProducts)
    return (
        <div>
            {/* Barra de búsqueda */}
            <input
                type="text"
                placeholder="Buscar productos"
                onChange={(e) => setBuscaryFiltrar(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;
