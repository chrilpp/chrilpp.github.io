import React, { useEffect, useState, useRef } from 'react'
import ContentContainer from '../Components/ContentContainer.jsx'
import './Start.css'

export default function Start() {
  // % relative to the inner game area
  const [player, setPlayer] = useState({ x: 50, y: 50 })
  const [target, setTarget] = useState(() => ({ x: 20 + Math.random() * 60, y: 20 + Math.random() * 60 }))
  const [score, setScore] = useState(0)

  const keys = useRef({})
  const rafRef = useRef(null)
  const lastRef = useRef(null)

  const playerSize = 7 // % of game area
  const targetSize = 7 // % of game area
  const speed = 35 // % per second

  useEffect(() => {
    const onKeyDown = e => {
      const k = e.key.toLowerCase()
      if (['arrowleft', 'arrowright', 'arrowup', 'arrowdown', 'a', 's', 'd', 'w'].includes(k)) {
        keys.current[k] = true
        e.preventDefault()
      }
    }
    const onKeyUp = e => {
      const k = e.key.toLowerCase()
      if (keys.current[k]) keys.current[k] = false
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
    }
  }, [])

  useEffect(() => {
    function loop(ts) {
      if (!lastRef.current) lastRef.current = ts
      const dt = (ts - lastRef.current) / 1000
      lastRef.current = ts

      //Movement direction
      let dx = 0
      let dy = 0
      if (keys.current['arrowleft'] || keys.current['a']) dx -= 1
      if (keys.current['arrowright'] || keys.current['d']) dx += 1
      if (keys.current['arrowup'] || keys.current['w']) dy -= 1
      if (keys.current['arrowdown'] || keys.current['s']) dy += 1

      if (dx !== 0 || dy !== 0) {
        //Normalize and move
        const mag = Math.hypot(dx, dy)
        dx = (dx / mag) * speed * dt
        dy = (dy / mag) * speed * dt

        setPlayer(p => {
          const half = playerSize / 2
          const min = half
          const max = 100 - half
          const nx = Math.max(min, Math.min(max, p.x + dx))
          const ny = Math.max(min, Math.min(max, p.y + dy))
          return { x: nx, y: ny }
        })
      }

      //basic collision detection
      setPlayer(p => {
        const dxC = p.x - target.x
        const dyC = p.y - target.y
        const dist = Math.hypot(dxC, dyC)
        const collideDist = (playerSize + targetSize) / 2
        if (dist <= collideDist) {
          setScore(s => s + 1)
          setTarget({ x: 10 + Math.random() * 80, y: 10 + Math.random() * 80 })
        }
        return p
      })

      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      lastRef.current = null
    }
  }, [target])

  return (
    <ContentContainer>
      <div className='game-content'>
        {/* game-area */}
        <section className='game-info'>
          <p className='game-instructions'>Portfolio Page WIP</p>
          <p className='game-instructions'>Christian Thulin Pfeifer - Developer</p>
          <a href='https://www.linkedin.com/in/christian-thulin-pfeifer-335226151' target='_blank' rel='noopener noreferrer' className='game-instructions'>
            LinkedIn
          </a>
        </section>
        <div className='game-area'>
          {/* target */}
          <div aria-hidden style={{ left: `${target.x}%`, top: `${target.y}%`, width: `${targetSize}%`, height: `${targetSize}%` }} className='target' />
          {/* player */}
          <div aria-hidden style={{ left: `${player.x}%`, top: `${player.y}%`, width: `${playerSize}%`, height: `${playerSize}%` }} className='player' />
        </div>
      </div>
    </ContentContainer>
  )
}
