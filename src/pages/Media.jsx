import React, { useState } from 'react'
import ContentContainer from '../Components/ContentContainer.jsx'
import Card from '../Components/Card.jsx'
import './Media.css'

export default function Media() {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    { src: '/color-converter-r/logo1.png', alt: 'Project Screenshot 1' },
    { src: 'https://picsum.photos/400/300?random=2', alt: 'Project Screenshot 2' },
    { src: 'https://picsum.photos/400/300?random=3', alt: 'Project Screenshot 3' },
    { src: 'https://picsum.photos/400/300?random=4', alt: 'Project Screenshot 4' },
    { src: 'https://picsum.photos/400/300?random=5', alt: 'Project Screenshot 5' },
    { src: 'https://picsum.photos/400/300?random=6', alt: 'Project Screenshot 6' },
    { src: 'https://picsum.photos/400/300?random=7', alt: 'Project Screenshot 7' },
    { src: 'https://picsum.photos/400/300?random=8', alt: 'Project Screenshot 8' },
    { src: 'https://picsum.photos/400/300?random=9', alt: 'Project Screenshot 9' },
    { src: 'https://picsum.photos/400/300?random=10', alt: 'Project Screenshot 10' },
  ]

  const openLightbox = image => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  return (
    <ContentContainer>
      <div className='media-container'>
        <h1 className='media-title'>Media Gallery</h1>
        <p className='media-subtitle'>Screenshots and visuals from my projects</p>

        <div className='media-grid'>
          {images.map((image, index) => (
            <Card key={index} className='media-card' onClick={() => openLightbox(image)}>
              <img src={image.src} alt={image.alt} className='media-image' />
            </Card>
          ))}
        </div>

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
