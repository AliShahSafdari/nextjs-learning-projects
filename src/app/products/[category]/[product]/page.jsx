import { ProductData } from "@/app/data"

export default function ({params}) {
    let{category, product} = params
    let productDetail = ProductData[category].find(
        (p) => p.name == product
    )

    return(
        <div>
            <h2>{productDetail.name}</h2>
            <h3>{productDetail.price}</h3>        
        </div>
    )
}