import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import App2 from './App2.jsx'
import BackGround from './BackGround.jsx'
import Loader from './Loader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <App2></App2> */}
    <BackGround />
    {/* <Loader /> */}
  </StrictMode>,
)
