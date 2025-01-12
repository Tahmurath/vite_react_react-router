import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import { BrowserRouter } from "react-router";
import App from './App.jsx'
import './input.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* <BrowserRouter basename="/resedist/front/dist"> */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
