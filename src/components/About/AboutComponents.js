import styled from "styled-components";


export const AboutHeader = styled.h1 `
  color: ${props => (props.theme.dark) ? 'white' : 'black'};
  margin: 0;
  padding: 0;
  font-size: 3.5rem;

`
export const AboutContainer = styled.div `
  margin: 0 auto;
  max-width: 1200px;
  display:flex;
  flex-direction:row;
  align-items:top;
  flex-wrap:wrap;
  justify-content:space-around;
  
`

export const SkillContainer = styled.div `
  cursor: pointer;
  -webkit-touch-callout: none; 
  -webkit-user-select: none;   
  -khtml-user-select: none;    
  -moz-user-select: none;    
  -ms-user-select: none;     
  user-select: none;
  width:45%;
`
export const SkillHeader = styled.div `
  height: 70px;
  padding:0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight:bold;
  color: ${props => (props.theme.dark) ? 'white' : 'black'};
`

export const SkillTitle = styled.span `
    color: ${props => (props.theme.dark) ? 'white' : 'black'};
    font-size: 2.1rem;
`

export const SkillBody = styled.div `
  overflow: hidden;
  padding: 8px 40px;
`

export const SkillText = styled.div `
display:inline;
position:relative;
top:12px;
left:15px;
background-color:  ${props => (props.theme.dark) ? '#1f1c2c' : 'white'};
text-align:center;
padding:5px;
border-radius: 30%;
color: ${props => (props.theme.dark) ? 'white' : 'black'};
`

export const ProgressbarCont = styled.div `
border:1px solid #4d4d4d;
border-radius:15px;
height:4px;
z-index: 0;
`
export const ProgressbarInner = styled.div `
background: ${props => props.theme.theme};
width: ${props => props.percents}  ;
height:4px;
border-radius:15px;
`

export const AboutMainText = styled.h1 `
text-align:center;
color: ${props => (props.theme.dark) ? 'white': 'black'};

`