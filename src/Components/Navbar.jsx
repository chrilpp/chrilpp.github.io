import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const linkClass = ({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`

export default function Navbar() {
  return (
    <header className='navbar-header'>
      <nav>
        <NavLink to='/' className={linkClass} end>
          Start
        </NavLink>
        <NavLink to='/color-converter' className={linkClass}>
          Color Converter
        </NavLink>
        <NavLink to='/about' className={linkClass}>
          About
        </NavLink>
        <NavLink to='/media' className={linkClass}>
          Media
        </NavLink>
      </nav>
    </header>
  )
}
