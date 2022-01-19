import styled from "styled-components";
import unique from './img/unique.png'

export const PortfolioContainer = styled.div `
display:flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
width: 700px;
margin: 0 auto;
`

export const UniquePhoto = styled.div `
// background-image: url(${unique});
// background-size: 240px 210px, auto, 150px;
// background-repeat: no-repeat;
border:1px solid red;
display:block;
height:300px;
width:300px;
`;

export const PortfolioTitle = styled.h1 `
color: ${props => props.theme};
`

export const PortfolioDescription = styled.div `
`