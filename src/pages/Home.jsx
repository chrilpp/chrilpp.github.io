import React from 'react'
import { Link } from 'react-router-dom'
import ContentContainer from '../Components/ContentContainer.jsx'
import Card from '../Components/Card.jsx'
import './Home.css'

export default function Home() {
  const featuredProjects = [
    {
      title: 'Touchgrind BMX 2',
      description: 'The iconic physics-driven BMX stunt game with unique two-finger controls, from Illusion Labs.',
      rating: '4.5',
      ratingPlatform: 'Google Play',
      tech: ['In-house Engine', 'C++'],
      link: 'https://play.google.com/store/apps/details?id=se.illusionlabs.touchgrindbmx2&hl=sv',
      image: '/bmx2_s.jpg',
    },
    {
      title: 'Touchgrind Scooter',
      description: 'The long-awaited scooter follow-up to BMX 2, bringing the same iconic two-finger controls to a whole new sport.',
      rating: '4.7',
      ratingPlatform: 'App Store',
      tech: ['In-house Engine', 'JavaScript', 'C++'],
      link: 'https://apps.apple.com/se/app/touchgrind-scooter/id1540937835',
      image: '/scooter_s.jpg',
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
                View Projects
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
                <a href={project.link} className='project-image-link'>
                  <div className='project-image'>
                    <img src={project.image} alt={project.title} />
                    {project.rating && (
                      <div className='project-rating-badge'>
                        <span className='rating-stars'>★ {project.rating}</span>
                        <span className='rating-platform'>{project.ratingPlatform}</span>
                      </div>
                    )}
                  </div>
                </a>
                <div className='project-content'>
                  <h3 className='project-title'>{project.title}</h3>
                  <p className='project-description'>{project.description}</p>
                  <div className='tech-stack'>
                    {project.tech.map((tech, i) => (
                      <span key={i} className='tech-tag'>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </ContentContainer>
  )
}
