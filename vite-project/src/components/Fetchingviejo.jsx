import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard';
function Fetchingviejo() {
    const url = 'https://fakestoreapi.com/products'
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [buscarYfiltrar, setBuscaryFiltrar] = useState('');
    const [selectcategoria, setSelectCategoria] = useState('');

    useEffect(() => {
        datosUrl();
    }, []);

    const datosUrl = () => {
        axios.get(url)
            .then(response => {
                setProducts(response.data);
                setLoading(false)
            })
            .catch(error => {
                console.log('Ocurrio un error,intente mas tarde');
                setError(error);
                setLoading(false)
            });
    };
    if (loading) {
        return <div>Loading...</div>;
    }
    const selectCategoria = (event) => {
        setSelectCategoria(event.target.value);
    }
    const filtraProducto = products.filter(product => product.title.toLowerCase().includes(buscarYfiltrar.toLowerCase()))
    return (
        <>
            <h1>Fetching</h1>
            {error && <p>{error.message}</p>}
            <p>Barra de busqueda</p>
            <input
                type="text"
                placeholder="Buscar productos"
                onChange={(e) => setBuscaryFiltrar(e.target.value)}
            />
            <p>{buscarYfiltrar}</p>
            <p>Categorias</p>
            <select value={selectcategoria} onChange={selectCategoria}>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelery</option>
                <option value="men's clothing">Men's clothing</option>
            </select>
            <p>La categoria es: {selectcategoria}</p>
            <p>FIltrado por solo busqueda</p>
            <ul>
                {products.filter(product =>
                    product.title.toLowerCase().includes(buscarYfiltrar.toLowerCase())
                ).map((product) => (
                    <li key={product.id}>{product.title} precio: {product.price} </li>)
                )}
            </ul>
            <p>filtrado por solo categoria</p>
            <ul>
                {products.filter(product => product.category.includes(selectcategoria))
                    .map(product => <li key={product.id}>{product.title}</li>)}
            </ul>
            <p>filtrado unicamente que coincidan busqueda con categoria</p>
            <ul>
                {products.filter(product => product.title.toLowerCase().includes(buscarYfiltrar.toLowerCase()) && selectcategoria)
                    .map(product => <li key={product.id}>{product.title}</li>)}
            </ul>
        </>
    );
}

export default Fetchingviejo