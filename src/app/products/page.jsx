"use client"

import { useEffect, useState } from "react"

export default function ProductPage(){
    const[products, setProducts] = useState([])

    function fetchProduct (){
        fetch("http://localhost:3000/api/products")
        .then(res=> res.json())
        .then(data => setProducts(data))
        .catch(error=> console.error(error))
    }
    useEffect(
        ()=> fetchProduct(), 
    [])
    return(
        <div>
            <h1>Products List: </h1>
            <ul>
                { products.map(
                    (product, index)=> <li key={index}> {product.name} - {product.price}</li>
                )}
            </ul>
        </div>
    )
}