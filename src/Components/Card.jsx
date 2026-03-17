import React from 'react'

export default function Card({ children, className = '', ...props }) {
  return (
    <div className={`bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${className}`} {...props}>
      {children}
    </div>
  )
}
