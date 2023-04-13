import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddBook from './components/AddBook'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<App />} />
      <Route path = "/add-book" element = {<AddBook />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
