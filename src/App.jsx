import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar'
import AnimatedRoutes from './Components/AnimatedRoutes'
import './App.css'

export default function App() {
  const currentYear = new Date().getFullYear()

  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
      <footer className='site-footer'>
        <p className='site-footer-text'>Designed and built by Christian Thulin Pfeifer · {currentYear}</p>
      </footer>
    </BrowserRouter>
  )
}
