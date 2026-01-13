import React, { useState, useMemo } from 'react'
import PageBox from '../Components/PageBox.jsx'

function hexToRgb(hex) {
  const h = hex.replace('#', '')
  const bigint = parseInt(h, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return { r, g, b }
}

export default function ColorConverter() {
  const [color, setColor] = useState('#F6E209')

  const { r, g, b } = useMemo(() => hexToRgb(color), [color])

  const hex = color.toUpperCase()
  const rgb = `rgb(${r}, ${g}, ${b})`
  const rgbPercent = `rgb(${((r / 255) * 100).toFixed(1)}%, ${((g / 255) * 100).toFixed(1)}%, ${((b / 255) * 100).toFixed(1)}%)`

  return (
    <PageBox>
      <div className={`w-[60vmin] h-[60vmin] rounded-lg ${color ? '' : ''} flex flex-col items-center justify-center gap-6`}>
        <div className='w-full h-full rounded-lg flex items-center justify-center' style={{ background: color }}>
          <div className='bg-black/30 p-4 rounded text-center'>
            <h2 className='text-white text-2xl mb-2'>Color Converter</h2>
            <div className='text-white'>{hex}</div>
            <div className='text-white'>{rgb}</div>
            <div className='text-white'>{rgbPercent}</div>
          </div>
        </div>

        <div className='mt-4 flex items-center gap-4'>
          <input aria-label='Pick a color' type='color' value={color} onChange={e => setColor(e.target.value)} className='w-12 h-12 p-0 border-0' />
          <input className='bg-transparent border border-gray-700 text-white px-3 py-1 rounded' value={hex} onChange={e => setColor(e.target.value)} />
        </div>
      </div>
    </PageBox>
  )
}
