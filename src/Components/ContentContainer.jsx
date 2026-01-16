import React from 'react'

const ContentContainer = ({ children }) => {
  return <div className='flex items-center justify-center h-[100vh] w-[100vw] px-4 py-6 md:px-0 md:py-0'>{children}</div>
}

export default ContentContainer
