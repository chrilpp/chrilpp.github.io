import React from 'react'
import ContentContainer from '../Components/ContentContainer.jsx'
import './About.css'

export default function About() {
  return (
    <ContentContainer>
      <div className='about-container'>
        <section className='left'>
          <img src='me.png' className='boxImage' width='200' height='200' />
        </section>
        <p className='about-link'>
          Mobile games developer with over 5 years of experience, specializing in UI, audio, and gameplay. I have a holistic mindset and enjoy polishing every detail, tackling
          tasks and the challenges around them to improve the final product. Recently, I have been transitioning my skill set to web development, applying the same UI-focused
          approach to building responsive interfaces with React. Above all, I love making games!
        </p>
      </div>
    </ContentContainer>
  )
}
