import React, { useState } from 'react'
import ContentContainer from '../Components/ContentContainer'
import './SelectList.css'

function SelectList() {
  const [selectedButtonText, setSelectedButtonText] = useState('')

  const handleButtonClick = text => {
    setSelectedButtonText(text)
  }

  return (
    <>
      <ContentContainer>
        <div className='inner'>
          <ul className='main-list'>
            <li>
              <button className={selectedButtonText === '1' ? 'selected' : ''} onClick={() => handleButtonClick('1')}>
                1
              </button>
            </li>
            <li>
              <button className={selectedButtonText === '2' ? 'selected' : ''} onClick={() => handleButtonClick('2')}>
                2
              </button>
            </li>
            <li>
              <button className={selectedButtonText === '3' ? 'selected' : ''} onClick={() => handleButtonClick('3')}>
                3
              </button>
            </li>
            <li>
              <button className={selectedButtonText === '4' ? 'selected' : ''} onClick={() => handleButtonClick('4')}>
                4
              </button>
            </li>
            <li>
              <button className={selectedButtonText === '5' ? 'selected' : ''} onClick={() => handleButtonClick('5')}>
                5
              </button>
            </li>
            <li>
              <button className={selectedButtonText === '6' ? 'selected' : ''} onClick={() => handleButtonClick('6')}>
                6
              </button>
            </li>
            <li>
              <button className={selectedButtonText === '7' ? 'selected' : ''} onClick={() => handleButtonClick('7')}>
                7
              </button>
            </li>
          </ul>
        </div>
      </ContentContainer>
    </>
  )
}

export default SelectList
