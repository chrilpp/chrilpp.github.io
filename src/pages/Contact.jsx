import React from 'react'
import ContentContainer from '../Components/ContentContainer.jsx'
import Card from '../Components/Card.jsx'
import './Contact.css'

export default function Contact() {
  return (
    <ContentContainer>
      <div className='contact-container'>
        <h1 className='contact-title'>Get In Touch</h1>
        <p className='contact-subtitle'>Let's work together on your next project</p>

        <div className='contact-grid'>
          <Card className='contact-card'>
            <h2 className='contact-card-title'>Email</h2>
            <p className='contact-info'>Get in touch</p>
            <a href='mailto:christian.thpf@gmail.com' className='contact-link'>
              Send Email
            </a>
          </Card>

          <Card className='contact-card'>
            <h2 className='contact-card-title'>LinkedIn</h2>
            <p className='contact-info'>Connect professionally</p>
            <a href='https://www.linkedin.com/in/christian-thulin-pfeifer-335226151' target='_blank' rel='noopener noreferrer' className='contact-link'>
              View Profile
            </a>
          </Card>
        </div>
      </div>
    </ContentContainer>
  )
}
