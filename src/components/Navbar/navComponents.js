import styled from "styled-components";
import {NavLink} from 'react-router-dom';

export const Nav = styled.nav`
  width: 100%;
  box-shadow: 0 1px 4px rgba(146, 161, 176, 0.15);
`
export const NavContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavLogo = styled.span`
  color: black;
  font-weight: 600;
  font-style: italic;
  font-size: 1.2rem;
`
export const NavLinks = styled(NavLink)`
  color: #000;
  margin:20px 10px;
  text-decoration: none;
  transition: 0.2s;
  &:hover{
    color: ${props => props.theme};
  }
  &.active {
    color: ${props => props.theme};
  }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`