import styled from 'styled-components'


export const Container = styled.div `
 max-width: 1200px;
  margin: 0 auto;  
  @media (max-width: 1000px) {
  }
`
export const CrunchesBlock = styled.div `
  display:flex;
  flex-direction: row;
  justify-content:space-between;
  align-items:center;
    
`

export const MainPageContainer = styled.div `
  margin:8% 50px 0 50px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
        @media(max-width:1054px) {
          flex-direction: column-reverse;
          align-items: center;
          justify-content: space-between;
          margin-top:5px;
        }
`
export const MainPageAbout = styled.div `
  width: 545px;
  display: flex;
  flex-direction: column;
  justify-content: center;
        @media(max-width: 670px) {
          width:100%;
          margin: 0 auto;
          text-align:center;
          align-items:center;
        }
`

export const MainPageH1 = styled.h1 `
  margin: 0;
  padding: 0;
  font-size: 3.5rem;
  color: ${props => (props.theme.dark) ? 'white':'black'};
  @media(max-width:670px) {
    font-size:2rem;
  }
  @media(max-width:500px) {
        margin-top:15px;
      }
`
export const MainPageButton = styled.a ` 
  background-color: ${props => props.theme.theme};
  display: inline-block;
  color: #fff;
  padding: .75rem 2.5rem;
  border-radius: .5rem;
  transition: .3s;
  width: 100px;
  cursor: pointer;
  text-align: center;
  text-decoration:none;
        &:hover{
          background: ${props => props.theme.theme};
          box-shadow: ${props => (props.theme.dark) ? '0px 10px 36px rgba(255,255,255,0.15)':'0px 10px 36px rgba(0, 0, 0, 0.15)'}
        }
        @media(max-width:450px) {
          margin-bottom:20px;
      }
`

export const MainPageText = styled.p `
    font-size: 1.2rem;
    color: ${props => (props.theme.dark) ? 'white':'black'};

`
export const MainPageDesc = styled.span `
    font-size: 1.2rem;
    margin-top: 5px;

`
export const ColoredText = styled.span `
  color: ${props => props.theme.theme};
`
export const MainPagePhoto = styled.div `
    box-sizing: border-box;
    min-width: 400px;
    @media(max-width: 670px) {
     max-width: 200px;
     display:flex;
     flex-direction:row;
     justify-content:center;
     align-items:center;
    }
`

export const MainPageLinks = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
   margin-right:50px;
`

export const MainPageLink = styled.a `
  cursor: pointer;
  margin: 15px 0;
  font-size: 1.4rem;
  transition: 0.3s;
  color: ${props => (props.theme.dark) ? 'white':'black'};
  &:hover{
    opacity: 0.4s;
    color: ${props => props.theme.theme};
  }
 
`