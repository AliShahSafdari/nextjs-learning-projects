export default function Profile()  {
    let information = {name:"AliShah", city:"Ghazni", job:"Web Developer"}
    return(
        <div>
            <h1>{information.name}</h1>
            <h2>{information.city}</h2>
            <h3>{information.job}</h3>
        </div>
    )
}