import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar'
import AnimatedRoutes from './Components/AnimatedRoutes'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
