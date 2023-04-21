import { useState } from "react"

export default function Numba4() {

    const [items, setItems] = useState([])
    const [totalItems, setTotalItems] = useState(0)

    const addItem = () => {
        const newItems = [...items, { name: `Item ${items.length + 1}`,}]
        setItems(newItems)
        setTotalItems(newItems.length)
    }

    return(
        <>
            <button onClick={addItem}>Add Item</button>
            <p>Total Items: {totalItems}</p>
        </>
    )
}