import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const linkClass = ({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`

export default function Navbar() {
  return (
    <div className='navbar-header'>
      <nav className='navbar-nav'>
        <section className='left'>
          <img src='logo3.png' className='boxImage' width='200' height='200' />
        </section>

        <section className='right'>
          <NavLink to='/' className={linkClass} end>
            Start
          </NavLink>
          <NavLink to='/color-converter' className={linkClass}>
            Color-converter
          </NavLink>
          <NavLink to='/about' className={linkClass}>
            About
          </NavLink>
          <NavLink to='/media' className={linkClass}>
            Media
          </NavLink>
        </section>
      </nav>
    </div>
  )
}
