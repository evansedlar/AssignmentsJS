import { useState } from "react"

export default function Numba6() {

    const [ count, setCount ] = useState(0)

    function handleIncrement() {
        setCount(count + 1)
    }

    function handleDecrement() {
        setCount(count - 1)
    }

    return(
        <>
            <button onClick={handleIncrement}>+</button>
            <h1>{count}</h1>
            <button onClick={handleDecrement}>-</button>
        </>
    )
}


