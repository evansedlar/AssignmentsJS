import { useEffect, useState } from "react"


export default function Numba3() {

    const [data, setData] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async() => {
       const users =  await fetch('http://localhost:8080/api/users')
       .then(response => response.json())
       setData(users)
       console.log(data)
    }

    const userInfo = data.map(
        user => {
            return (
            <li key = {user._id}>
            <div>{user.firstName}</div>
            <div>{user.lastName}</div>
            <div>{user.age}</div>
            </li>
            )
        }
    )

    return(
        <ul>{userInfo}</ul>
    )
}

