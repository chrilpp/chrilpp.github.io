import React from 'react'

const PageBox = ({ children }) => {
  return (
    <div className='flex items-center justify-center w-full px-4 py-6 md:px-0 md:py-0'>
      {children}
    </div>
  )
}

export default PageBox
