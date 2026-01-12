import React from 'react'
const dotUrl = new URL('/dot3.png', import.meta.url).href

const PageBox = ({ color, title }) => (
  <div className='flex items-center justify-center w-full'>
    <div className={`w-[60vmin] h-[60vmin] rounded-lg ${color} flex items-center justify-center`}>
      <div className='flex flex-col items-center gap-4'>
        <div className='grid grid-cols-5 gap-3'>
          {Array.from({ length: 25 }).map((_, i) => (
            <img key={i} src={dotUrl} alt={`dot-${i}`} className='w-12 h-12 object-contain' />
          ))}
        </div>
        <a className='text-white'>A white dot!</a>
      </div>
    </div>
  </div>
)

export default function Media() {
  return <PageBox color='bg-blue-600' title='Media Page' />
}
