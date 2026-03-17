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
      contributions: [
        'Ownership of in-game UI implementation',
        'Iterated on controls',
        'Designed and implemented game mode "Adrenaline Rush"',
        'Implemented Tutorial game mode',
        'Implemented trick preview videos for challenges with swipe animations',
        'Added trick animations',
        'Designed and implemented guided menu flow',
        'Created popups from mockups such as settings, race start/end, and player elimination',
        'Designed and implemented gameplay features (e.g. "Flip Dash")',
        'Full ownership of FMOD implementation and sound design',
      ],
      tech: ['Unity', 'C#', 'FMOD'],
      link: 'https://play.google.com/store/apps/details?id=se.illusionlabs.tgx&hl=sv',
      image: '/Bmx3.png',
    },
    {
      title: 'Kwartikum',
      description: 'Sokoban-inspired puzzle adventure introducing innovative mechanics layered on classic grid-based design. Solo-developed in Unity for PC/Steam.',
      contributions: ['Developed full game (design, graphics, UI)', 'Managed Steamworks integration', 'Audio handled externally, keeping focus on learning more about game design'],
      tech: ['Unity', 'C#', 'FMOD'],
      link: 'https://store.steampowered.com/app/4319030/Kwartikum/',
      image: '/kwart_main_capsule.png',
    },
    {
      title: 'Touchgrind Scooter',
      description:
        'Trick-based scooter game released at Illusion Labs for iOS/Android. Developed with in-house engine using JavaScript and C++. Integrated SDK systems including Firebase and IronSource for ads and monetization.',
      contributions: [
        'Owned and implemented most UI, including animations and backend integration',
        'Co-developed multiplayer versus mode with backend developer',
        'Iterated on UI flow and systems',
        'Collaborated closely with lead designers on UI implementation',
        'Implemented daily rewarded-ad crate system',
        'Integrated IronSource and ad mediation',
        'Used Firebase Functions for reward distribution to user databases',
      ],
      tech: ['JavaScript', 'C++', 'In-house Engine'],
      link: 'https://apps.apple.com/se/app/touchgrind-scooter/id1540937835',
      image: '/SCOOTER.png',
    },
    {
      title: 'Touchgrind BMX 2',
      description:
        'Iconic BMX simulation game at Illusion Labs for iOS/Android. Led major UI revamp in 2.0 update working closely with lead design, with ownership of the entire redesign task.',
      contributions: [
        'Full UI revamp for the 2.0 update, including redesigned customize menu',
        'Added menu for new crates and crazy bikes',
        'Added a shop section to the UI',
        'Implemented rewarded ads (Android) to unlock a rotating location (24h cycle)',
        'Improved game feel and polish, especially race end screens',
        'Added new UI audio',
        'Redesigned main menu (full ownership)',
      ],
      tech: ['In-house Engine', 'C++'],
      link: 'https://play.google.com/store/apps/details?id=se.illusionlabs.touchgrindbmx2&hl=sv',
      image: '/BMX2.png',
    },
    {
      title: 'Orb Striker',
      description:
        'Gameplay prototype currently in development at Typogun (startup) for iOS/Android. Team of six developers with focus on rapid prototyping, architecture design, and core gameplay systems.',
      contributions: ['Owned project structure, repository, and core game design', 'Implemented gameplay systems', 'Ownership of sound design', 'Acted as lead developer'],
      tech: ['Unity', 'C#'],
      link: 'https://play.google.com/store/apps/details?id=se.typogun.orbstriker',
      image: '/orbStriker.png',
    },
    {
      title: 'Way of the Turtle',
      description:
        'Apple Arcade title where I contributed sound design for the final boss, and yes, also handled the mission-critical task of ordering company socks with the logo on them.',
      contributions: ['Audio for final boss', 'Socks', 'Support mail'],
      tech: ['In-house Engine', 'C++'],
      link: 'https://www.youtube.com/watch?v=9GBv3i62hJA',
      image: '/wayoftheturtle.png',
    },
  ]

  return (
    <ContentContainer>
      <div className='projects-container'>
        <h1 className='projects-title'>Selected Projects</h1>
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
                <details className='project-contribution'>
                  <summary className='project-contribution-toggle'>Contribution</summary>
                  <ul className='project-contribution-list'>
                    {project.contributions.map((item, i) => (
                      <li key={i} className='project-contribution-item'>
                        {item}
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </ContentContainer>
  )
}
