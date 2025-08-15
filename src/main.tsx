import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* A propriedade 'basename' diz ao router qual é a pasta base do site */}
    <BrowserRouter basename="/Os-8-temperamentos/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
