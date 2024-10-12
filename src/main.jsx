import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Components1 from './components1.jsx'
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
   {/* <Components1/> */}
  </StrictMode>,
)
