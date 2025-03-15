"use client"

import { useEffect, useState } from "react"

export default function ProductPage(){
    const[products, setProducts] = useState([])
    const[newname, setNewName] = useState("")
    const[newprice, setNewPrice] = useState("")

    function fetchProduct (){
        fetch("http://localhost:3000/api/products")
        .then(res=> res.json())
        .then(data => setProducts(data))
        .catch(error=> console.error(error))
    }

    function handleAddProduct(){
        fetch("http://localhost:3000/api/products", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name:newname, price:newprice})
        })
        .then(fetchProduct)
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
            <h2>Add New Product:</h2>
            <input type="text" placeholder="Enter product name"
             value={newname} onChange={()=> setNewName(event.target.value)} />
            <br />
            <input type="text" placeholder="Enter product price"
              value={newprice} onChange={()=> setNewPrice(event.target.value)}/>
            <br />
            <button onClick={() =>{
                handleAddProduct()
                setNewName("")
                setNewPrice("")
            }}> Add new Product </button>
        </div>
    )
}