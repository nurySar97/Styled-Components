import React, { useRef, useState } from 'react'
import { ButtonCore, Wave, WavesBox } from './components'
import { v4 } from 'uuid'

const theme = {
  dark: { bgColor: '#000' },
  primary: { bgColor: '#007bff' },
  secondary: { bgColor: '#6c757d' },
  danger: { bgColor: '#ff1f44' },
  green: { bgColor: '#1fff20', fontColor: '#071824' }
}

const PlaystarzButton = props => {
  const [ripples, setRipples] = useState([])
  const buttonRef = useRef(null)
  const { type, ...restProps } = props
  const onMouseDown = event => {
    const {
      left,
      top,
      width,
      height
    } = buttonRef.current.getBoundingClientRect()
    const size = Math.max(width, height)
    const topY = event.clientY - top
    const leftX = event.clientX - left
    const uniqueId = v4()
    const ObjectWave = {
      Component: (
        <Wave
          key={uniqueId}
          uniqueId={uniqueId}
          setRipples={setRipples}
          styles={{ size, topY, leftX }}
        />
      ),
      uniqueId
    }
    setTimeout(() => setRipples(prev => [...prev, ObjectWave]), 0)
  }

  return (
    <ButtonCore
      onMouseDown={onMouseDown}
      ref={buttonRef}
      {...restProps}
      {...(type ? theme[type] : {})}
    >
      {props.children}
      <WavesBox children={ripples.map(({ Component }) => Component)} />
    </ButtonCore>
  )
}

export default PlaystarzButton
