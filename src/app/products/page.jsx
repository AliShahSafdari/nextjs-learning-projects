import Link from "next/link";
import { ProductData } from "../data"

export default function Products() {
    let categories = Object.keys(ProductData);
    return(
        <div>
            <ul>
                {
                    categories.map(
                        (category) =>(
                            <li key={category}>
                                <Link href={`/products/${category}`}> {category} </Link>
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    )
}