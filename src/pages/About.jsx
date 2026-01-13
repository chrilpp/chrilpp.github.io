import React from 'react'
import PageBox from '../Components/PageBox.jsx'

export default function About() {
  return (
    <PageBox>
      <div className={`w-[60vmin] h-[60vmin] rounded-lg bg-green-600 flex items-center justify-center`}>
        <a className='text-white text-center'>Boy trying out some react as a game dev</a>
      </div>
    </PageBox>
  )
}
