import { ProductData } from "@/app/data";
import Link from "next/link";

export default function ({params}) {
    let {category} = params;
    let products = ProductData[category]
    return(
        <div>
            <ul>
                {
                    products.map(
                        (product) =>(
                            <li key={product.name}>
                                <Link href={`/products/${category}/${product.name}`}> {product.name}</Link>
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    )
}