import styled from "styled-components";

const ButtonCore = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0;
  overflow:hidden;
  outline: none;
  touch-action: manipulation;
  line-height: 1.5;
  font-weight: 600;

  color: ${({ fontColor = '#fff' }) => fontColor};
  background-color: ${({ bgColor = '#007bff' }) => bgColor};
  font-size: ${({ fontSize = '1rem' }) => fontSize};

  border-radius: .25em;
  transition: filter 300ms ease 0s, opacity 300ms ease 0s, transform 100ms ease 0s;
  box-shadow: rgb(0 0 0 / 20%) 0px 1px 3px 0px, rgb(0 0 0 / 12%) 0px 1px 2px 0px;
  padding: calc(0.5em + 2px) 1em;
  
  &:hover {
    filter: brightness(.9);
  }

  &:disabled {
    filter: brightness(.75);
    opacity: .75;
  }
`;

export default ButtonCore;