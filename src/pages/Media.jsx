import React from 'react'

const PageBox = ({ color, title }) => (
  <div className='flex items-center justify-center w-full'>
    <div className={`w-[60vmin] h-[60vmin] rounded-lg ${color} flex items-center justify-center`}>
      <a className='text-white'>A white dot!</a>
    </div>
  </div>
)

export default function Media() {
  return <PageBox color='bg-blue-600' title='Media Page' />
}
