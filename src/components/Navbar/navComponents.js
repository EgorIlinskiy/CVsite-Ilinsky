import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav `
  width: 100%;
  box-shadow: ${props => (props.theme.dark) ? 'none' : '0 1px 4px rgba(146, 161, 176, 0.15)'}
`
export const NavContainer = styled.div `
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 20px;
 @media(max-width:520px) {
   justify-content:end;
 }
  `

export const NavLogo = styled.span `
  font-weight: 600;
  font-style: italic;
  font-size: 1.2rem;
  color: ${props => (props.theme.dark) ? 'white':'black'};
`
export const NavLinks = styled(NavLink)
`
  color: ${props => (props.theme.dark) ? 'white':'black'};
  margin:20px 10px;
  text-decoration: none;
  transition: 0.2s;
  &:hover{
    color: ${props => props.theme.theme};
  }
  &.active {
    color: ${props => props.theme};
    color: ${props => props.theme.theme};
}
`

export const NavMenu = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const OpenMenuBar = styled.div `
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  width:100vw;
  top:0;
  right:0;
  height:40%;
  background-color:  ${props => (props.theme.dark) ? '#1f1c2c' : 'white'};
  z-index:1000;
  box-shadow: ${props => (props.theme.dark) ? '0px 10px 36px rgba(255,255,255,0.15)':'0px 10px 36px rgba(0, 0, 0, 0.15)'};
`

export const CloseMenuElement = styled.span `
position: absolute;
top:10px;
right: 15px;
`