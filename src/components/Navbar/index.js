import React from "react";
import {connect} from 'react-redux'
import {Nav, NavLinks, NavLogo, NavMenu,NavContainer} from './navComponents'
import {ColoredText} from '../Main/mainComponents'
class NavBar extends React.Component{



    render() {

        return <Nav>
            <NavContainer>
                <NavLogo>
                    {'<EGOR'}
                    <ColoredText theme={this.props.theme}>/</ColoredText>
                    {'>'}
                </NavLogo>
                <NavMenu>
                    <NavLinks to="/" theme={this.props.theme}>
                        Main
                    </NavLinks>
                    <NavLinks to="/about" theme={this.props.theme}>
                        About
                    </NavLinks>
                    <NavLinks to="/portfolio" theme={this.props.theme}>
                        Portfolio
                    </NavLinks>
                </NavMenu>
            </NavContainer>
          </Nav>

    }
}

let mapStateToProps = function(state){
    return{
        theme: state.store.theme
    }
}

let mapDispatchToProps = function(dispatch){
    return{
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
