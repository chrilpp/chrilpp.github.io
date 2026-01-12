import React from 'react'
import { NavLink } from 'react-router-dom'

const linkClass = ({ isActive }) => (isActive ? 'text-white font-semibold' : 'text-gray-400') + ' px-3 py-1 rounded'

export default function Navbar() {
  return (
    <header className='h-16 flex items-center justify-center border-b border-gray-800'>
      <nav>
        <NavLink to='/' className={linkClass} end>
          Index
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
