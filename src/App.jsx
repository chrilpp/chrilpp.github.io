import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar'
import AnimatedRoutes from './Components/AnimatedRoutes'
import './App.css'

export default function App() {
  return (
    <BrowserRouter basename='/color-converter-r'>
      <Navbar />
      <AnimatedRoutes />
      <footer className='app-footer'>
        <p>© 2026 Christian Thulin Pfeifer</p>
      </footer>
    </BrowserRouter>
  )
}
