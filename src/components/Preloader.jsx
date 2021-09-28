import styled from "styled-components";
import { rotate } from ".";
import loader from './../assets/images/loader.png';

const Card = styled.div.attrs(props => ({
    size: props.size || '50px'
}))`
    width: ${props => props.size};
    height: ${props => props.size};

    animation: ${rotate} infinite 5s linear;
    
    & img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: transparent;    
    }
`;


const Preloader = (props) => (<Card {...props}> <img src={loader} alt="loader" /></Card>);

export { Preloader };