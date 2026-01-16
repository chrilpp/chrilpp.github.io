import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Start from './pages/Start'
import About from './pages/About'
import Media from './pages/Media'
import ColorConverter from './pages/ColorConverter'
import './App.css'

export default function App() {
  return (
    <BrowserRouter basename='/color-converter-r'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/start' element={<Start />} />
        <Route path='/about' element={<About />} />
        <Route path='/media' element={<Media />} />
        <Route path='/color-converter' element={<ColorConverter />} />
      </Routes>
    </BrowserRouter>
  )
}
