import styled, { createGlobalStyle } from "styled-components";

const Thing = styled.div.attrs(() => ({ tabIndex: 0 }))`
  color: blue;
  margin-bottom: 1rem;
  padding: 1rem;

  && {
    color: blue;
  }

  &:hover {
    color: red;
  }

  & ~ & {
    background: tomato;
  }

  & + & {
    background: lime;
  }

  &.something {
    background: orange;
  }

  .something-else & {
    border: 1px solid;
  }

  .something-primary {
    border: 1px solid; // an element labeled ".something" inside <Thing>
    display: block;
  }
`

const GlobalStyle = createGlobalStyle`
  div${Thing} {
    color: red;
  }
`

export { Thing, GlobalStyle };