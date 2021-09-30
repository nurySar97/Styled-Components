import React from 'react';
import styled from 'styled-components';

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


export {
  Button,
  ButtonMain,
  ButtonExtended,
  ReversedButton,
  ButtonThemed
};