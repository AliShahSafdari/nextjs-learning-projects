let products = [
    { name: "product a", price: "100" },
    { name: "product b", price: "200" },
]

export async function GET(request) {
    try {
        return new Response(
            JSON.stringify(products),
            { status: 200, headers: { "Content-Type": "application/json" } }
        )
    } catch (error) {
        return new Response(
            JSON.stringify({ "error": error }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        )
    }

}

export async function POST(request) {
    try {
        let newProduct = await request.json()
        products.push(newProduct)
        return new Response(
            JSON.stringify(products),
            { status: 201, headers: { "Content-Type": "application/json" } }
        )
    } catch (error) {
        return new Response(
            JSON.stringify({ "alert": "Invalid data" }),
            { status: 400, headers: { "Content-Type": "application/json" } }
        )
    }
}

export async function PUT(request) {
    try {
        let updateProduct = await request.json()
        let index = products.findIndex(
            (product) => product.name == updateProduct.name
        )

        if (index == -1) {
            return new Response(
                JSON.stringify({ "alrt": "not found" }),
                { status: 404, headers: { "Content-Type": "application/json" } }
            )
        }

        products[index] = updateProduct

        return new Response(
            JSON.stringify(products),
            { status: 200, headers: { "Content-Type": "application/json" } }
        )
    } catch (error) {
        return new Response(
            JSON.stringify({"alrt": "Invalide data"}),
            { status: 400, headers: { "Content-Type": "application/json" } }
        )
    }
}

export async function DELETE(request){
    try {
        let deletedProduct = await request.json()
        products= products.filter(
            (product) => product.name != deletedProduct.name
        )
        return new Response(
            JSON.stringify(products),
            {status:200, headers: { "Content-Type": "application/json" }}
        )

    } catch (error) {
        return new Response(
            JSON.stringify({"alrt": "Invalide data"}),
            { status: 400, headers: { "Content-Type": "application/json" } }
        )
    }

}