import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createStore } from 'redux'
// Provider is a component in React and it is responsible for providing the Redux Store to the React application
import { Provider } from 'react-redux'
import reducer from './store/reducer.jsx'



const store = createStore(reducer)



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider />
      <App />
    <Provider />
  </React.StrictMode>,
)
