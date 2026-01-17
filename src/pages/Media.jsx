import React from 'react'
import ContentContainer from '../Components/ContentContainer.jsx'
import './Media.css'

const dotUrl = new URL('/dot3.png', import.meta.url).href

export default function Media() {
  const videos = ['https://www.youtube.com/embed/0G228jVdqtE', 'https://www.youtube.com/embed/9fQWvPdVhGM', 'https://www.youtube.com/embed/m77iSMmFhMw']

  return (
    <ContentContainer>
      <div className='video-grid'>
        {videos.map((src, i) => (
          <div key={i} className='video-frame'>
            <iframe
              src={src}
              title={`video-${i}`}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </ContentContainer>
  )
}
