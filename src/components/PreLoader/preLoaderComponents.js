import styled, { keyframes } from "styled-components";
//keyframes 

const load = keyframes `
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const textLoad = keyframes `
    0% {
        opacity: 100%;
    }
    50% {
        opacity: 60%;
    }
    100% {
        opacity: 100%;
    }
`

export const LoadScreen = styled.div `
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    position: relative;
    background: #000;
`
export const Ring = styled.div `
    position: relative;
    width: 150px;
    height: 150px;
    margin: -30px;
    border-radius: 50%;
    border-top: 1px solid purple;
    border-bottom: transparent;
    animation: ${load} 2s linear infinite;
    &:nth-child(1) {
    animation-delay: -1s;
}
`
export const LoadText = styled.span `
 color: purple;
    position: absolute;
    top: 64%;
    animation: ${textLoad} 1s linear infinite;
`