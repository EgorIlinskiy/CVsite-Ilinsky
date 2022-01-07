import styled from "styled-components";


export const AboutHeader = styled.h1`
  color: ${props => props.theme};
  margin: 0;
  padding: 0;
  font-size: 3.5rem;
`
export const AboutContainer = styled.div`
  width: 100%;
  border: 1px solid red;
  margin: 20px;
`

export const SkillContainer = styled.div`
  cursor: pointer;
  -webkit-touch-callout: none; 
  -webkit-user-select: none;   
  -khtml-user-select: none;    
  -moz-user-select: none;    
  -ms-user-select: none;     
  user-select: none;
  
`
export const SkillHeader = styled.div`
  width: 580px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SkillTitle = styled.span`
    color:black;
    font-size: 2.1rem;
  
`

export const SkillBody = styled.div`
  transition: 0.5s ease;
  overflow: hidden;
  padding: 20px;
`