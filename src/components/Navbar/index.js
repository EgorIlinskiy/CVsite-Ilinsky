import React from "react";
import {connect} from 'react-redux'
import {Nav, NavLinks, NavLogo, NavMenu,NavContainer,OpenMenuBar, CloseMenuElement} from './navComponents'
import {ColoredText} from '../Main/mainComponents'
import Settings from '../Settings/index'

class NavBar extends React.Component{
constructor(props){
    super(props);
    this.state={
        width:0,
        height:0,
        isOpen:false
    }
}

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions =() => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

      openMenu = ()=>{
          this.setState({isOpen: !this.state.isOpen})
      }

    render() {
        let hamburger = <OpenMenuBar theme = {this.props.colors}>
            <CloseMenuElement onClick={this.openMenu}><i class="uil uil-multiply"></i></CloseMenuElement>
        <NavLinks to="/" theme={this.props.colors}  onClick={this.openMenu}>
               Main
           </NavLinks   >
           <NavLinks to="/about" theme={this.props.colors}  onClick={this.openMenu}>
               About
           </NavLinks>
           <NavLinks to="/portfolio" theme={this.props.colors}  onClick={this.openMenu}>
               Portfolio
           </NavLinks>
           <Settings/>
             </OpenMenuBar>
       if(this.state.width<=520) {
      if(this.state.isOpen == true){
            return <Nav theme={this.props.colors}>
            <NavContainer >
                {hamburger}
            </NavContainer>
        </Nav>
        }
        else {
           return <Nav theme={this.props.colors}>
                   <NavContainer >
                  <i className="uil uil-subject" onClick={this.openMenu}></i>
         </NavContainer>
       </Nav>
        }            
        }

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
