import React, { useState, useMemo } from 'react'
import ContentContainer from '../Components/ContentContainer.jsx'
import './ColorConverter.css'

function hexToRgb(hex) {
  const h = hex.replace('#', '')
  const bigint = parseInt(h, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return { r, g, b }
}

export default function ColorConverter() {
  const [color, setColor] = useState('#df8c00')

  const { r, g, b } = useMemo(() => hexToRgb(color), [color])

  const hex = color.toUpperCase()
  const rgb = `rgb(${r}, ${g}, ${b})`
  const rgbPercent = `rgb(${((r / 255) * 100).toFixed(1)}%, ${((g / 255) * 100).toFixed(1)}%, ${((b / 255) * 100).toFixed(1)}%)`

  return (
    <ContentContainer>
      <div className='color-converter-container'>
        <div className='color-display' style={{ background: color }}>
          <div className='color-info'>
            <h2 className='color-title'>Color Converter</h2>
            <div className='color-value'>{hex}</div>
            <div className='color-value'>{rgb}</div>
            <div className='color-value'>{rgbPercent}</div>
          </div>
        </div>

        <div className='controls'>
          <input aria-label='Pick a color' type='color' value={color} onChange={e => setColor(e.target.value)} className='color-picker' />
          <input className='hex-input' value={hex} onChange={e => setColor(e.target.value)} />
        </div>
      </div>
    </ContentContainer>
  )
}
