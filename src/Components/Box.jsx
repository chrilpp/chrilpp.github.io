import React from 'react'

const Box = ({ toShow = 'X', bgColor = 'bg-blue-500' }) => {
  return (
    <div className={`flex ${bgColor} w-20 h-20`}>
      <a>{toShow} </a>
    </div>
  )
}

export default Box
