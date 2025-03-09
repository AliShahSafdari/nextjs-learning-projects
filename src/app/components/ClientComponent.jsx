"use client"
import { useState } from "react"

export default function ClientComponent() {
    let[counter, setCounter] = useState(0)

    return(
        <div>
            <h2>Shoping Cart (Cliet Component)</h2>
            <h3>The vaule of counter is: {counter}</h3>
            <button onClick={()=> setCounter(counter+1)}>add to cart</button>
            
            <button onClick={()=> setCounter(counter-1)} disabled = {counter <=0}>remove from cart</button>

        </div>
    )
}