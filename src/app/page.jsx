async function getUser(){
  let response = await fetch("https://jsonplaceholder.typicode.com/users")
  let users = await response.json()
  return users
}

export default async function showUser(){
  let allUser = await getUser()
  return(
    <div>
      <ul>
        {
          allUser.map(
            (user, index)=>(
              <li key={index}> {user.name}</li>
            )
          )
        }
      </ul>
    </div>
  )
}