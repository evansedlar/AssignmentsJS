import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {

  const handleCounterIncrement = (ctr) => {
    console.log(ctr)
  }

  return (
    <>
      <h1>App</h1>
      <Counter onCounterIncrement = {handleCounterIncrement}/>
    </>
  )
}

export default App
