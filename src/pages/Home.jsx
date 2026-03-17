import React from 'react'
import { Link } from 'react-router-dom'
import ContentContainer from '../Components/ContentContainer.jsx'
import Card from '../Components/Card.jsx'
import './Home.css'

export default function Home() {
  const featuredProjects = [
    {
      title: 'Touchgrind BMX 2',
      description: 'Iconic BMX game from Illusion Labs.',
      tech: ['In-house Engine', 'C++', 'UI/UX'],
      link: 'https://play.google.com/store/apps/details?id=se.illusionlabs.touchgrindbmx2&hl=sv',
    },
    {
      title: 'Touchgrind Scooter',
      description: 'Trick-based scooter game released at Illusion Labs. ',
      tech: ['In-house Engine', 'JavaScript', 'C++', 'UI/UX'],
      link: 'https://apps.apple.com/se/app/touchgrind-scooter/id1540937835',
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
              <p className='hero-subtitle'>UI Programmer | Game Developer</p>
              <p className='hero-description'>Specializing in polished, responsive player experiences with 5+ years of professional experience.</p>
              <p className='hero-highlight'>Contributed to titles with a combined 300M+ downloads worldwide.</p>
              <Link to='/projects' className='cta-button'>
                View My Work
              </Link>
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
                  View Game
                </a>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </ContentContainer>
  )
}
