import styled from "styled-components";

export const PortfolioContainer = styled.div `
display:flex;
flex-direction: row;
align-items: center;
justify-content: start;
background-image: url(${props => props.img});
background-position:center;
background-size: cover;
height:350px;
border-radius: 2px;
box-shadow: 0px 10px 36px rgba(0, 0, 0, 0.15);
`

export const PortfolioTitle = styled.h1 `
color: ${props => props.theme};
`

export const PortfolioDescription = styled.div `
color:white;
text-align:center;
`

export const PortfolioAnnotation = styled.div `
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
background-color: black;
width:450px;
background-color: rgba(39,47,51,0.85);
height:100%;
`

export const PortfolioLink = styled.a `
color: #00adb5;
text-decoration: none;
margin-top: 20px;
        &:Visited{
            text-decoration:underline;
            color:#00adb5;
        }
`