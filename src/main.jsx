import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ListarImagenes from './ListarImagenes.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListarImagenes />
  </StrictMode>,
)
