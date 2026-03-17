import React from 'react'
import ContentContainer from '../Components/ContentContainer.jsx'
import Card from '../Components/Card.jsx'
import './Home.css'

export default function Home() {
  const featuredProjects = [
    {
      title: 'Kwartikum - Puzzle Adventure',
      description: 'Sokoban-inspired puzzle adventure with innovative mechanics. Solo-developed in Unity for PC/Steam.',
      tech: ['Unity', 'C#', 'Game Design'],
      link: 'https://store.steampowered.com/app/4319030/Kwartikum/',
    },
    {
      title: 'Touchgrind BMX 3: Rivals',
      description: 'Competitive BMX racing game shipped at Illusion Labs. Built in Unity with gameplay systems, UI, and monetization features.',
      tech: ['Unity', 'C#', 'Game Design'],
      link: '#',
    },
  ]

  return (
    <ContentContainer>
      <div className='home-container'>
        {/* Hero Section */}
        <section className='hero-section'>
          <h1 className='hero-title'>Christian Thulin Pfeifer</h1>
          <p className='hero-subtitle'>UI Programmer & Game Developer</p>
          <p className='hero-description'>
            Over 5 years shipping globally-released games with 300M+ downloads combined. Shipped titles including Touchgrind BMX 3: Rivals and Touchgrind Scooter. Now leading a
            team at Typogun building innovative gameplay prototypes. Combining deep technical expertise with creative decision-making to ship polished products.
          </p>
          <a href='/projects' className='cta-button'>
            View My Work
          </a>
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
