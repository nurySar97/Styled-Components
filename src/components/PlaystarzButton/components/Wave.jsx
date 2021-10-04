import React, { useRef, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

const ripple = size => keyframes`
  0% {
    width: 0;
    height: 0;
    opacity: .5;
    background: #efef;
  }
  100% {
    width: ${size * 2 + 'px'};
    height: ${size * 2 + 'px'};
    opacity: 0;
    background: #e0e0e0;
  }
`

const StyledWave = styled.div`
  position: absolute;
  top: ${({ topY = 0 }) => topY + 'px'};
  left: ${({ leftX = 0 }) => leftX + 'px'};
  animation: ${({ size = 200 }) => ripple(size)}
    ${({ duration }) => duration + 'ms'} linear;
  transform: translate3d(-50%, -50%, 0);
  border-radius: 50%;
`

const Wave = ({ styles, setRipples, uniqueId }) => {
  const timeout = useRef(null)
  const duration = 750

  useEffect(() => {
    timeout.current = setTimeout(
      () =>
        setRipples(prev => prev.filter(ripple => ripple.uniqueId !== uniqueId)),
      duration
    )
    return () => clearTimeout(timeout.current)
  }, [uniqueId, setRipples])

  return <StyledWave {...styles} duration={duration} />
}

export default Wave
