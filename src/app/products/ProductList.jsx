async function fetchProduct() {
    let res = await fetch("https://fakestoreapi.com/products")
    if(!res.ok){
        throw new Error("Faild to fetch...")
    }
    return  res.json()
}

export default async function ProductList() {
    let products = await fetchProduct()

    return(
        <div>
            <ul>
                {
                    products.map(
                        (product, index)=> <li key={index}> {product.title}</li>
                    )
                }
            </ul>
        </div>
    )
    
}