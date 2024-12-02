import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from './Card'

function App() {
    const url = 'https://fakestoreapi.com/products'
    const [error,setError]=useState(null);
    const [fetch,setFetch]=useState([])
    useEffect(
        () => {
            fetchApi();
        }, []
    );
    const fetchApi = () => {
        axios.get(url)
            .then(response => setFetch(response.data))
            .catch( err => {setError(err)})
    };
    return (
        <>
            <div>hola probando</div>
            {fetch.map((event)=> <Card key={event.id} titulo={event.title} categ={event.category} precio={event.price} />)}
            
        </>
    )
}

export default App