import React from "react";
import {connect} from 'react-redux'
import {Nav, NavLinks, NavLogo, NavMenu,NavContainer} from './navComponents'
import {ColoredText} from '../Main/mainComponents'
import Settings from '../Settings/index'

class NavBar extends React.Component{



    render() {
        return <Nav theme={this.props.colors}>
            <NavContainer >
                <NavLogo theme={this.props.colors} >
                  {'<EGOR'}
                    <ColoredText theme={this.props.colors}>/</ColoredText>
                    {'>'}
                </NavLogo>
                <NavMenu>
                    <NavLinks to="/" theme={this.props.colors}>
                        Main
                    </NavLinks>
                    <NavLinks to="/about" theme={this.props.colors}>
                        About
                    </NavLinks>
                    <NavLinks to="/portfolio" theme={this.props.colors}>
                        Portfolio
                    </NavLinks>
                    <Settings/>
                </NavMenu>
            </NavContainer>
          </Nav>

    }
}

let mapStateToProps = function(state){
    return{
        colors: state.store
    }
}

let mapDispatchToProps = function(dispatch){
    return{
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
