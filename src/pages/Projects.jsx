import React from 'react'
import ContentContainer from '../Components/ContentContainer.jsx'
import Card from '../Components/Card.jsx'
import './Projects.css'

export default function Projects() {
  const projects = [
    {
      title: 'Kwartikum - Puzzle Adventure',
      description: 'Sokoban-inspired puzzle adventure introducing innovative mechanics layered on classic grid-based design. Solo-developed in Unity for PC/Steam.',
      tech: ['Unity', 'C#', 'Game Design'],
      link: 'https://store.steampowered.com/app/4319030/Kwartikum/',
      image: '/color-converter-r/push2.gif',
    },
    {
      title: 'Touchgrind BMX 3: Rivals',
      description:
        'Competitive BMX racing game developed and shipped at Illusion Labs. Built in Unity with gameplay mechanics, UI systems, and monetization features. Part of titles with 300M+ combined downloads worldwide.',
      tech: ['Unity', 'C#', 'Game Design', 'Firebase'],
      link: 'https://play.google.com/store/apps/details?id=se.illusionlabs.tgx&hl=sv',
      image: '/color-converter-r/Bmx3.png',
    },
    {
      title: 'Touchgrind Scooter',
      description:
        'Trick-based scooter game released at Illusion Labs. Developed with in-house engine using JavaScript and C++. Integrated SDK systems including Firebase and IronSource for ads and monetization.',
      tech: ['JavaScript', 'C++', 'In-house Engine', 'FMOD'],
      link: 'https://play.google.com/store/apps/details?id=se.illusionlabs.touchgrindscooter&hl=sv',
      image: '/color-converter-r/SCOOTER.png',
    },
    {
      title: 'Touchgrind BMX 2',
      description:
        'Iconic BMX simulation game at Illusion Labs. Led major UI revamp in 2.0 update working closely with lead design, with ownership of the entire redesign task. Integrated monetization and third-party SDKs.',
      tech: ['In-house Engine', 'UI Design', 'SDK Integration'],
      link: 'https://play.google.com/store/apps/details?id=se.illusionlabs.touchgrindbmx2&hl=sv',
      image: '/color-converter-r/BMX2.png',
    },
    {
      title: 'Orb Striker',
      description:
        'Gameplay prototype currently in development at Typogun. Leading a team of six developers with focus on rapid prototyping, architecture design, and core gameplay systems.',
      tech: ['Unity', 'C#', 'Gameplay Systems', 'Agile'],
      link: '#',
      image: '/color-converter-r/orbStriker.png',
    },
    {
      title: 'Portfolio Website',
      description: 'Modern responsive portfolio showcasing projects and experience. Built with React, Vite, and Tailwind CSS with smooth animations and polished UX.',
      tech: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
      link: '#',
      image: '/logo3.png',
    },
  ]

  return (
    <ContentContainer>
      <div className='projects-container'>
        <h1 className='projects-title'>My Projects</h1>
        <p className='projects-subtitle'>A showcase of shipped games and web development work</p>

        <div className='projects-grid'>
          {projects.map((project, index) => (
            <Card key={index} className='project-card'>
              <a href={project.link} className='project-image-link'>
                <div className='project-image'>
                  <img src={project.image} alt={project.title} />
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
      </div>
    </ContentContainer>
  )
}
