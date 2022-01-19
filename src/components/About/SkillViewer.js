import React from "react";
import {AboutContainer, SkillContainer,SkillTitle, SkillHeader, SkillBody} from "./AboutComponents";
import SkillComponent from './SkillComponent'
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux'
class SkillViewer extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            frontOpen:true,
            backOpen:false,
            disOpen: false
        }
}
    frontClick = () => {
        this.setState({
            frontOpen:!this.state.frontOpen
        })
    }
    backClick = () =>{
        this.setState({
            backOpen:!this.state.backOpen
        })
    }
    disClick = () =>{
        this.setState({
            disOpen: !this.state.disOpen
        })
    }
    render() {
        let frontElements=  <SkillBody>
           <SkillComponent theme={this.props.theme} percents={'90%'}>HTML</SkillComponent>
           <SkillComponent theme={this.props.theme} percents={'80%'}>CSS</SkillComponent>
           <SkillComponent theme={this.props.theme} percents={'65%'}>JavaScript</SkillComponent>
           <SkillComponent theme={this.props.theme} percents={'80%'}>jQuery</SkillComponent>
           <SkillComponent theme={this.props.theme} percents={'65%'}>React</SkillComponent>
           <SkillComponent theme={this.props.theme} percents={'80%'}>Redux</SkillComponent>
           <SkillComponent theme={this.props.theme} percents={'30%'}>Vue</SkillComponent>
           <SkillComponent theme={this.props.theme} percents={'40%'}>TypeScript</SkillComponent>

        </SkillBody>

        let backElements = <SkillBody>
           <SkillComponent theme={this.props.theme} percents={'70%'}>Node.js</SkillComponent>
           <SkillComponent theme={this.props.theme} percents={'70%'}>Express</SkillComponent>
           <SkillComponent theme={this.props.theme} percents={'50%'}>MongoDB</SkillComponent>
           <SkillComponent theme={this.props.theme} percents={'90%'}>SQL</SkillComponent>
           <SkillComponent theme={this.props.theme} percents={'90%'}>MS SQL Server</SkillComponent>
           <SkillComponent theme={this.props.theme} percents={'20%'}>Firebase</SkillComponent>
        </SkillBody>
        let disElements = <SkillBody>
        <SkillComponent theme={this.props.theme} percents={'80%'}>Figma</SkillComponent>
        <SkillComponent theme={this.props.theme} percents={'80%'}>Photoshop</SkillComponent>
        <SkillComponent theme={this.props.theme} percents={'60%'}>UX/UI basics</SkillComponent>
     </SkillBody>
        let empty  = <div></div>
        return <AboutContainer>
            <SkillContainer  onClick={this.frontClick}>
             <SkillHeader>
                 <SkillTitle><span style={{color:this.props.theme}}>{'{ }'}</span></SkillTitle>
                 <SkillTitle>Front-End Skills</SkillTitle>
                 {!this.state.frontOpen ?  <i className="uil uil-angle-down angleToggle"></i> :  <i className="uil uil-angle-up angleToggle"></i>}
             </SkillHeader>
              <CSSTransition in={this.state.frontOpen}
                  timeout={300}
                  classNames="slide"
                  >
                  {this.state.frontOpen ? frontElements : empty}
              </CSSTransition>
            </SkillContainer>
            <SkillContainer onClick={this.backClick}>
            <SkillHeader>
                 <SkillTitle><span style={{color:this.props.theme}}><i className="uil uil-server-connection angleToggle"></i></span></SkillTitle>
                 <SkillTitle>Back-End Skills</SkillTitle>
                 {!this.state.open ?  <i className="uil uil-angle-down angleToggle"></i> :  <i className="uil uil-angle-up angleToggle"></i>}
             </SkillHeader>
              <CSSTransition in={this.state.backOpen}
                  timeout={300}
                  classNames="slide"
                  >
                  {this.state.backOpen ? backElements : empty}
              </CSSTransition>
            </SkillContainer>
            <SkillContainer onClick={this.disClick}>
            <SkillHeader>
                 <SkillTitle><span style={{color:this.props.theme}}><i className="uil uil-palette"></i></span></SkillTitle>
                 <SkillTitle>Designer Skills</SkillTitle>
                 {!this.state.open ?  <i className="uil uil-angle-down angleToggle"></i> :  <i className="uil uil-angle-up angleToggle"></i>}
             </SkillHeader>
              <CSSTransition in={this.state.disOpen}
                  timeout={300}
                  classNames="slide"
                  >
                  {this.state.disOpen ? disElements : empty}
              </CSSTransition>
            </SkillContainer>
        </AboutContainer>
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
export default connect(mapStateToProps,mapDispatchToProps)(SkillViewer);

