import React from 'react'

const PageBox = ({ color, title }) => (
  <div className='flex items-center justify-center w-full'>
    <div className={`w-[60vmin] h-[60vmin] rounded-lg ${color} flex items-center justify-center`}>
      <h1 className='text-white text-3xl'>{title}</h1>
    </div>
  </div>
)

export default function About() {
  return <PageBox color='bg-green-600' title='About Page' />
}
