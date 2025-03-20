import Link from "next/link"

const allProducts = [
    {id:0, title:"Product 0", price: 29.99},
    {id:1, title:"Product 1", price: 49.99},
    {id:2, title:"Product 2", price: 19.99},
    {id:3, title:"Product 3", price: 39.99},
    {id:4, title:"Product 4", price: 59.99},
    {id:5, title:"Product 5", price: 69.99},
    {id:6, title:"Product 6", price: 79.99},
    {id:7, title:"Product 7", price: 89.99},
    {id:8, title:"Product 8", price: 99.99},
    {id:9, title:"Product 9", price: 9.99},

]

export default function Products({searchParams}){
    let ppg = 3
    let page = parseInt(searchParams?.page) || 1
    let firstIndex = (page-1)* ppg
    let endIndex = firstIndex + ppg

    let showProducts = allProducts.slice(firstIndex , endIndex)
    return(
        <div>
            <h2>Porduct page</h2>
            <ul>
                {
                   showProducts.map(
                        (product, index)=> <li key={index}> {product.title} - {product.price}</li>
                    )
                }
            </ul>

            <div>
                <Link href={`?page=${page-1}`}>Previous</Link>
                <span>....</span>
                <Link href={page <= ppg ? `?page=${page+1}` : {}}>Next</Link>
            </div>
        </div>

    )
}