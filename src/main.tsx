import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Welcome from './routes/Welcome'

const root = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(root).render(
  // <React.StrictMode>
    // <App />
    <Welcome />
  // </React.StrictMode>,
)
