import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { counterActions, authActions } from './store'

function App() {

  const [amount, setAmount] = useState(0)

  const counter = useSelector(state => state.ctr.counter)
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(counterActions.increment())
  }

  const handleDecrement = () => {
    dispatch(counterActions.decrement())
  }

  const handleIncrease = () => {
    dispatch(counterActions.increase(amount))
  }

  const handleChange = (e) => {
    const value = parseInt(e.target.value)
    setAmount(value)
  }

  const handleLogin = () => {
    dispatch(authActions.login())
  }

  const handleLogout = () => {
    dispatch(authActions.logout())
  }

  return (
    <>
      <h1>{ counter }</h1>
      <button onClick = {handleIncrement}>Increment</button>
      <button onClick = {handleDecrement}>Decrement</button>
      <input type = 'text' placeholder = 'Enter Amount to Add' name="number" onChange={handleChange}/>
      <button onClick={handleIncrease}>Add</button>
      { isAuthenticated ? <h1>Authenticated</h1> : <h1>Not Authenticated</h1> }
      <button onClick = {handleLogin}>Login</button>
      <button onClick = {handleLogout}>Log Out</button>
    </>
  )
}

export default App
