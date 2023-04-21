import { useState } from 'react'


function Numba2() {

    const [inputValue, setInputValue] = useState('')

    const handleClick = () => {
        alert(inputValue)
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    return(
        <>
            <input type="text" value={inputValue} onChange={handleChange} placeholder="Enter Text"/>
            <button onClick={handleClick}>Submit</button>
        </>
    )
}

export default Numba2