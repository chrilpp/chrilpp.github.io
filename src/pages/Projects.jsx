import React from 'react'
import ContentContainer from '../Components/ContentContainer.jsx'
import Card from '../Components/Card.jsx'
import './Projects.css'

export default function Projects() {
  const projects = [
    {
      title: 'Touchgrind BMX 3: Rivals',
      description:
        'Competitive BMX racing game developed and shipped at Illusion Labs for iOS/Android. Built in Unity with gameplay mechanics, UI systems, and monetization features.',
      tech: ['Unity', 'C#', 'FMOD', 'UI/UX'],
      link: 'https://play.google.com/store/apps/details?id=se.illusionlabs.tgx&hl=sv',
      image: '/Bmx3.png',
    },
    {
      title: 'Kwartikum',
      description: 'Sokoban-inspired puzzle adventure introducing innovative mechanics layered on classic grid-based design. Solo-developed in Unity for PC/Steam.',
      tech: ['Unity', 'C#', 'Game Design'],
      link: 'https://store.steampowered.com/app/4319030/Kwartikum/',
      image: '/kwart_main_capsule.png',
    },
    {
      title: 'Touchgrind Scooter',
      description:
        'Trick-based scooter game released at Illusion Labs for iOS/Android. Developed with in-house engine using JavaScript and C++. Integrated SDK systems including Firebase and IronSource for ads and monetization.',
      tech: ['JavaScript', 'C++', 'In-house Engine', 'UI'],
      link: 'https://apps.apple.com/se/app/touchgrind-scooter/id1540937835',
      image: '/SCOOTER.png',
    },
    {
      title: 'Touchgrind BMX 2',
      description:
        'Iconic BMX simulation game at Illusion Labs for iOS/Android. Led major UI revamp in 2.0 update working closely with lead design, with ownership of the entire redesign task.',
      tech: ['In-house Engine', 'C++', 'UI'],
      link: 'https://play.google.com/store/apps/details?id=se.illusionlabs.touchgrindbmx2&hl=sv',
      image: '/BMX2.png',
    },
    {
      title: 'Orb Striker',
      description:
        'Gameplay prototype currently in development at Typogun for iOS/Android. Team of six developers with focus on rapid prototyping, architecture design, and core gameplay systems.',
      tech: ['Unity', 'C#', 'Gameplay Systems'],
      link: 'https://play.google.com/store/apps/details?id=se.typogun.orbstriker',
      image: '/orbStriker.png',
    },
    {
      title: 'Way of the Turtle',
      description:
        'Apple Arcade title where I contributed sound design for the final boss, and yes, also handled the mission-critical task of ordering company socks with the logo on them.',
      tech: ['Sound Design', 'Production Support'],
      link: 'https://www.youtube.com/watch?v=9GBv3i62hJA',
      image: '/wayoftheturtle.png',
    },
  ]

  return (
    <ContentContainer>
      <div className='projects-container'>
        <h1 className='projects-title'>My Work</h1>
        <p className='projects-subtitle'>A selection of projects delivered both in collaborative teams and through solo development</p>

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
