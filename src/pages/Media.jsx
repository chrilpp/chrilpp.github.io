import React from 'react'
import ContentContainer from '../Components/ContentContainer.jsx'
import './Media.css'

const dotUrl = new URL('/dot3.png', import.meta.url).href

export default function Media() {
  return (
    <ContentContainer>
      <div className='media-container'>
        <div className='media-content'>
          <div className='dot-grid'>
            {Array.from({ length: 25 }).map((_, i) => (
              <img key={i} src={dotUrl} alt={`dot-${i}`} className='dot-image' />
            ))}
          </div>
          <a className='media-text'>A white dot!</a>
        </div>
      </div>
    </ContentContainer>
  )
}
