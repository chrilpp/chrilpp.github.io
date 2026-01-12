import React from 'react'

const PageBox = ({ color, title }) => (
  <div className='flex items-center justify-center w-full'>
    <div className={`w-[60vmin] h-[60vmin] rounded-lg ${color} flex items-center justify-center`}>
      <a className='text-white'>Boy trying out some react as a game dev</a>
    </div>
  </div>
)

export default function About() {
  return <PageBox color='bg-green-600' title='About Page' />
}
