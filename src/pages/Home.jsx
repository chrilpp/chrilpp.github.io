import React from 'react'
import ContentContainer from '../Components/ContentContainer.jsx'
import Card from '../Components/Card.jsx'
import './Home.css'

export default function Home() {
  const featuredProjects = [
    {
      title: 'Kwartikum',
      description: 'Sokoban-inspired puzzle adventure with innovative mechanics. Solo-developed in Unity for PC/Steam.',
      tech: ['Unity', 'C#', 'Game Design'],
      link: 'https://store.steampowered.com/app/4319030/Kwartikum/',
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
          <h1 className='hero-title'>Christian Thulin Pfeifer</h1>
          <p className='hero-subtitle'>UI Programmer & Game Developer</p>
          <p className='hero-description'>
            UI Programmer and game developer with 5+ years of professional experience specializing in polished, responsive player experiences. My primary focus is UI development,
            though I also work with gameplay systems, animation feel, player feedback, and technical sound design. I have mainly worked in mobile game development, contributing to
            titles with 300M+ downloads worldwide. Much of my experience is in custom engines, with Unity as my primary tool.
          </p>
          <img src='/color-converter-r/CVbild.jpg' alt='Christian Thulin Pfeifer' className='hero-image' />
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
