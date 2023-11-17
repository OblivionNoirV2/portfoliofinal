import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import * as contextContent from './context.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <contextContent.themeContextProvider>
    <App />

    </contextContent.themeContextProvider>

    </BrowserRouter>
  </React.StrictMode>,
)
