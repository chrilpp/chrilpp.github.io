import { useState } from 'react'
import dot from '/dot3.png'
import Box from './Components/Box'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState([])
  const [inputValue, setInputValue] = useState('')

  // Generate 10 boxes using Array.from (don't use state for this)
  const boxes = Array.from({ length: 4 }, (_, i) => i)

  const addItem = () => {
    const trimmed = inputValue.trim()
    if (!trimmed) return
    setItems(prev => [...prev, trimmed])
    setInputValue('')
  }

  const onKeyDown = e => {
    if (e.key === 'Enter') addItem()
  }

  return (
    <>
      <header className='absolute inset-x-0 top-0 z-50'></header>
      <nav className='h-16 flex items-center justify-center mb-4'>
        <a href='index' className='mx-4'>
          Index
        </a>
        <a href='about' className='mx-4'>
          About
        </a>
        <a href='media' className='mx-4'>
          Media
        </a>
      </nav>

      <div className='center-container h-[calc(80vh-4rem)] w-full'>
        <div className='flex items-center justify-center w-full h-1/2 bg-gray-500/30 rounded-xl'>
          <a href='https://google.com' target='_blank' rel='noreferrer' className='flex-1 h-full flex items-center justify-center'>
            <img src={dot} alt='dot' className='h-2/4' />
          </a>
          <div className='flex justify-center bg-blue-100 w-20 h-20'>
            <a className='flex items-center'>hey</a>
          </div>

          <a href='https://google.com' target='_blank' rel='noreferrer' className='flex-1 h-full flex items-center justify-center'>
            <img src={dot} alt='dot2' className='h-2/4' />
          </a>
        </div>
        <div className='flex w-full h-1/2 bg-gray-300/30 items-start justify-center rounded-xl flex-col'>
          <div className='flex h-1/2 w-full bg-blue-300/30 items-start justify-center rounded-xl pt-5 gap-5 flex-wrap'>
            {boxes.map(i => (
              <Box key={i} />
            ))}
          </div>
          <h1 className='w-full text-center pb-4'>Some text</h1>
        </div>
      </div>
    </>
  )
}

export default App
