// Fetching.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard'; // Asegúrate de importar ProductCard correctamente
import SearchBar from './SearchBar';


function Fetching() {
  const url = 'https://fakestoreapi.com/products';
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectcategoria, setSelectCategoria] = useState('');
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    datosUrl();
  }, []);
  // Función para obtener los productos
  const datosUrl = () => {
    axios
      .get(url)
      .then((response) => {
        console.log('Productos recibidos:', response.data); // Verifica los datos recibidos
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Ocurrió un error, intenta más tarde');
        setError(error);
        setLoading(false);
      });
  };
  // Si está cargando, muestra el mensaje de "Loading"
  if (loading) {
    return <div>Loading...</div>;
  }
  // Función para manejar la selección de categoría
  const selectCategoria = (event) => {
    setSelectCategoria(event.target.value);
  };

  return (
    <div>
      <h1>Fetching</h1>
      {/* Si hay un error, mostrarlo */}
      {error && <p>{error.message}</p>}

      {/* Select para categorías */}
      <select value={selectcategoria} onChange={selectCategoria}>
        <option value="">Todas las categorías</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's clothing</option>
      </select>

    <SearchBar productos={products} filtro={setProducts}/>

      {/* Muestra los productos filtrados en una lista */}
      <ul>
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard
                title={product.title}
                price={product.price}
                category={product.category}
                description={product.description}
              />
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Fetching;
