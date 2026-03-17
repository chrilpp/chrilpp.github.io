import React, { useState } from 'react'
import ContentContainer from '../Components/ContentContainer.jsx'
import Card from '../Components/Card.jsx'
import './Media.css'

export default function Media() {
  const [selectedImage, setSelectedImage] = useState(null)

  const videos = [
    { id: 'pEcc_QkSUwU', title: 'Touchgrind BMX 3 Gameplay Preview' },
    { id: '5fKSqonRlSA', title: 'Touchgrind BMX 2 Trailer' },
    { id: '1QDnwDiYDkQ', title: 'Touchgrind Scooter Release Trailer' },
    { id: 'Mq0qSKOfT0g', title: 'Touchgrind BMX 2 – New Location: Heatstroke' },
    { id: '9GBv3i62hJA', title: 'Way of the Turtle – Part 2 Trailer' },
    { id: 'xhwgDoVRg6w', title: 'Orb Striker Trailer' },
    { id: 'y00MnXtYRAc', title: 'Sound Design Reel' },
  ]

  const imageGroups = {
    Kwartikum: [
      { src: 'Kwa1.png', alt: 'Kwartikum Screenshot 1' },
      { src: 'Kwa2.png', alt: 'Kwartikum Screenshot 2' },
    ],
    'Orb Striker': [
      { src: 'Orb1.png', alt: 'Orb Striker Screenshot 1' },
      { src: 'Orb2.png', alt: 'Orb Striker Screenshot 2' },
      { src: 'Orb3.png', alt: 'Orb Striker Screenshot 3' },
    ],
  }

  const openLightbox = image => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  return (
    <ContentContainer>
      <div className='media-container'>
        <h1 className='media-title'>Gallery</h1>
        <p className='media-subtitle'>Visual showcase of game development work and media</p>

        {/* Videos Section */}
        <section className='media-section'>
          <div className='media-grid'>
            {videos.map((video, index) => (
              <Card key={index} className='media-card video-card'>
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  className='video-iframe'
                ></iframe>
                <h3 className='video-title'>{video.title}</h3>
              </Card>
            ))}
          </div>
        </section>

        {/* Images Section */}
        <section className='media-section'>
          {Object.entries(imageGroups).map(([projectName, images]) => (
            <div key={projectName} className='image-group'>
              <h3 className='project-title'>{projectName}</h3>
              <div className='media-grid'>
                {images.map((image, index) => (
                  <Card key={index} className='media-card' onClick={() => openLightbox(image)}>
                    <img src={image.preview || image.src} alt={image.alt} className='media-image' />
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </section>

        {selectedImage && (
          <div className='lightbox' onClick={closeLightbox}>
            <div className='lightbox-content'>
              <img src={selectedImage.src} alt={selectedImage.alt} className='lightbox-image' />
              <button className='lightbox-close' onClick={closeLightbox}>
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </ContentContainer>
  )
}
