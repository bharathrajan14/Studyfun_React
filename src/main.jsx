/* =========================================
   main.jsx - Entry point for the React app
   This file renders the App component into the DOM
   ========================================= */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'

// Mount the React app to the #root div in index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
