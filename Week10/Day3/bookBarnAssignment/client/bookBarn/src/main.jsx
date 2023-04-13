import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddBook from './components/AddBook'
import BaseLayout from './components/BaseLayout'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path = "/" element = {<App />} />
          <Route path = "/add-book" element = {<AddBook />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>,
)
