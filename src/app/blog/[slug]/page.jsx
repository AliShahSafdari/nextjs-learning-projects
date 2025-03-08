export async function generateStaticParams() {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts/')
    let posts = await res.json()

    let ids = posts.map(
        (post)=>(
            {slug:post.id.toString()}
        )
    )
    return ids
}


export default async function postDetails({params}) {
    let {slug} = params
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
    let goalPost = await res.json()
    return(
        <div>
            <h2>{goalPost.title}</h2>
            <h3>{goalPost.body}</h3>
        </div>
    )
}