import React from 'react'
import ContentContainer from '../Components/ContentContainer.jsx'
import Card from '../Components/Card.jsx'
import './About.css'

export default function About() {
  const skills = [
    'Unity',
    'C#',
    'JavaScript',
    'Gameplay Systems',
    'UI Development',
    'SDK Integration',
    'Sound Design',
    'FMOD',
    'Performance Optimization',
    'Agile/Scrum',
    'Git',
    'React',
  ]

  return (
    <ContentContainer>
      <div className='about-container'>
        <Card className='bio-card'>
          <div className='bio-image-wrapper'>
            <img src='/color-converter-r/me.png' className='profile-image' width='150' height='150' alt='Christian Thulin Pfeifer' />
          </div>
          <h1 className='about-name'>Christian Thulin Pfeifer</h1>
          <p className='about-bio'>
            Unity developer with over 5 years of experience taking games from prototype to global release.{' '}
            <strong>Contributed to titles with a combined 300M+ downloads worldwide.</strong> I bring a mix of technical precision and creative decision-making, with a track record
            of shaping UI flow, gameplay, and monetization features. I have a holistic mindset and enjoy polishing every detail to improve the final product. Currently leading a
            team of six developers at Typogun, building a Unity prototype targeting publisher deals.
          </p>
        </Card>

        <Card className='skills-card'>
          <h2 className='section-title'>Core Skills</h2>
          <div className='skills-grid'>
            {skills.map((skill, index) => (
              <span key={index} className='skill-tag'>
                {skill}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </ContentContainer>
  )
}
