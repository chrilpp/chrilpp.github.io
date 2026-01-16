import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Index from './pages/Index'
import About from './pages/About'
import Media from './pages/Media'
import ColorConverter from './pages/ColorConverter'
import './App.css'

export default function App() {
  return (
    <BrowserRouter basename='/color-converter-r'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/index' element={<Index />} />
        <Route path='/about' element={<About />} />
        <Route path='/media' element={<Media />} />
        <Route path='/color-converter' element={<ColorConverter />} />
      </Routes>
    </BrowserRouter>
  )
}
