import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { v4 } from 'uuid';
const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;

const ButtonMain = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
  transition: all .2s linear;

  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

const ButtonExtended = styled(ButtonMain)`
  color: tomato;
  border-color: tomato;

  &:hover {
    background-color: tomato;
    color: white;
  }
`;


const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />;

const ButtonThemed = styled.button`
  background: ${props => props.theme.bc};
  color: ${props => props.theme.fc};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.theme.fc};
  border-radius: 3px;
  cursor: pointer;
`;

const ButtonCore = styled.button`
  position: relative;
  display: inline-block;
  font-size: 1.5rem;
  padding: .5em 1em;
  cursor: pointer;
  border: 0;
  color: #fff;
  background-color: #007bff;
  border-radius: .25em;
  overflow:hidden;
`;

const WaveBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-flex;
`;

const ripple = size => (keyframes`
  0% {
    width: 0;
    height: 0;
    opacity: .75;
  }

  100% {
    width: ${size + 'px'};
    height: ${size + 'px'};
    opacity: 0;
  }
`)

const StyledWave = styled.div.attrs(props => ({
  size: props.size || '200px',
  X: props.X || 0,
  Y: props.Y || 0
}))`
  position: absolute;
  top: ${props => props.Y + 'px'};
  left: ${props => props.X + 'px'};
  transform: translate3d(-50%, -50%, 0);
  animation: ${props => ripple(props.size)} infinite .75s linear;
  background: rgb(179, 179, 179);
  border-radius: 50%;
`;

const Wave = ({ size, X, Y, setRipples, id }) => {
  const timer = useRef(null);
  useEffect(() => {
    timer.current = setTimeout(() => setRipples(prev => prev.filter(ripple => ripple.id !== id)), 750);
    return () => clearTimeout(timer.current);
  }, [id, setRipples]);

  return <StyledWave size={size} X={X} Y={Y} />
}

const ButtonWave = props => {
  const [ripples, setRipples] = useState([]);
  const buttonRef = useRef(null);

  const onMouseDown = event => {
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const size = Math.max(width, height);
    const Y = event.clientY - top;
    const X = event.clientX - left;
    const id = v4();

    setRipples(prev => {
      return [...prev, { Component: <Wave id={id} key={id} setRipples={setRipples} size={size} X={X} Y={Y} />, id }]
    });
  }

  return (
    <ButtonCore
      onMouseDown={onMouseDown}
      ref={buttonRef}
    >
      {props.children}
      <WaveBox>
        {ripples.map(({ Component }) => Component)}
      </WaveBox>
    </ButtonCore>)
}

export {
  Button,
  ButtonMain,
  ButtonExtended,
  ReversedButton,
  ButtonThemed,
  ButtonWave
};