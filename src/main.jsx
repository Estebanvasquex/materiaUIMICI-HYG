import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { BusquedaProcesoNAC } from './visor_mici/pages/BusquedaProcesoNAC/BusquedaProcesoNAC'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/*<VisorApp />*/}
      <BusquedaProcesoNAC />
    </BrowserRouter>
    
  </React.StrictMode>,
)
