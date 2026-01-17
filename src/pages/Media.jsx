import React from 'react'
import ContentContainer from '../Components/ContentContainer.jsx'
import './Media.css'

const dotUrl = new URL('/dot3.png', import.meta.url).href

export default function Media() {
  const videos = ['https://www.youtube.com/embed/0G228jVdqtE', 'https://www.youtube.com/embed/9fQWvPdVhGM', 'https://www.youtube.com/embed/m77iSMmFhMw']
  const headers = ['Touchgrind Scooter', 'Touchgrind BMX3', 'Touchgrind Scooter']
  const descriptions = ['Example of UI flow implemented', 'Example of In-Game UI and gameplay implemented', 'Example of full implementation for ads']

  return (
    <ContentContainer>
      <div className='video-grid'>
        {videos.map((src, i) => (
          <div key={i} className='video-frame'>
            <div className='video-inner'>
              <iframe
                src={src}
                title={`video-${i}`}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </div>
          </div>
        ))}
        {videos.map((item, i) => (
          <div className={'Video' + i} key={i}>
            <h3 className='videoTitle'>{headers[i]}</h3>
            <p>{descriptions[i]}</p>
          </div>
        ))}
      </div>
    </ContentContainer>
  )
}
