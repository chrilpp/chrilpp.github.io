import React from 'react'
import ContentContainer from '../Components/ContentContainer.jsx'
import Card from '../Components/Card.jsx'
import './Home.css'

export default function Home() {
  const featuredProjects = [
    {
      title: 'Touchgrind Scooter',
      description: 'Trick-based scooter game released at Illusion Labs. Developed with in-house engine using JavaScript and C++.',
      tech: ['JavaScript', 'C++', 'In-house Engine', 'UI'],
      link: 'https://play.google.com/store/apps/details?id=se.illusionlabs.touchgrindscooter&hl=sv',
    },
    {
      title: 'Touchgrind BMX 3: Rivals',
      description: 'Competitive BMX racing game shipped at Illusion Labs. Built in Unity with gameplay systems, UI, and monetization features.',
      tech: ['Unity', 'C#', 'Game Design'],
      link: 'https://play.google.com/store/apps/details?id=se.illusionlabs.tgx&hl=sv',
    },
  ]

  return (
    <ContentContainer>
      <div className='home-container'>
        {/* Hero Section */}
        <section className='hero-section'>
          <div className='hero-content'>
            <div className='hero-text'>
              <h1 className='hero-title'>Christian Thulin Pfeifer</h1>
              <p className='hero-subtitle'>UI Programmer & Game Developer</p>
              <p className='hero-description'>Specializing in polished, responsive player experiences with 5+ years of professional experience.</p>
              <a href='/projects' className='cta-button'>
                View My Work
              </a>
            </div>
            <img src='/CVbild.jpg' alt='Christian Thulin Pfeifer' className='hero-image' />
          </div>
        </section>

        {/* Featured Projects */}
        <section className='featured-section'>
          <h2 className='section-title'>Featured Projects</h2>
          <div className='projects-grid'>
            {featuredProjects.map((project, index) => (
              <Card key={index} className='project-card'>
                <h3 className='project-title'>{project.title}</h3>
                <p className='project-description'>{project.description}</p>
                <div className='tech-stack'>
                  {project.tech.map((tech, i) => (
                    <span key={i} className='tech-tag'>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className='project-link'>
                  View Project
                </a>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </ContentContainer>
  )
}
