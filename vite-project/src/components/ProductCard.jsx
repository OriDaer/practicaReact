// src/components/ProductCard.jsx
import React from 'react';

function ProductCard({ title, price, category, description }) {
    return (
        <div>
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            <p>Category: {category}</p>
            <p>Description: {description}</p>
        </div>
    );
}

export default ProductCard;
