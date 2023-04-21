import { useState } from "react"

export default function Numba5() {

    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ address, setAddress ] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        console.log("Name:", name)
        console.log("Email:", email)
        console.log("Address:", address)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter Address" />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}