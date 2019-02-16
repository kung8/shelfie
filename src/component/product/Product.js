import React from 'react';

export default function Product (props) {
    const {product} = props
    return (
        <div>
            <h1>{product.name}</h1>
            <h1>{product.price}</h1>
            <h1>{product.imageUrl}</h1>
            <button onClick={()=>props.delete(product.product_id)}>Delete</button>
        </div>
    )
}