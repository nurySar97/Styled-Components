import styled from "styled-components";

const Input = styled.input.attrs(props => ({
    type: "text",
    size: props.size || "0.75rem 1rem",
}))`
    width: 100%;
    max-width: 400px;
    color: ${props => props.inputColor || "palevioletred"};
    background: papayawhip;
    border: none;
    border-radius: 3px;

    margin: ${props => props.size};
    padding: ${props => props.size};
`;

const PasswordInput = styled(Input).attrs({
    type: "password",
})`
    border: 2px solid aqua;
  `;

export { Input, PasswordInput };