import React from "react";
import {AboutContainer, SkillContainer,SkillTitle, SkillHeader, SkillBody} from "./AboutComponents";
import SkillComponent from './SkillComponent'
import { CSSTransition } from 'react-transition-group';

class SkillViewer extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            open:true
        }
}
    frontClick = () => {
        this.setState({
            open:!this.state.open
        })
    }

    render() {
        let frontElements=  <SkillBody>
           <SkillComponent theme={'red'} percents={'80%'}/>
        </SkillBody>
        let empty  = <div></div>
        return <AboutContainer theme={'red'}>
            <SkillContainer  onClick={this.frontClick}>
             <SkillHeader>
                 <SkillTitle>{'{ }'}</SkillTitle>
                 <SkillTitle>Front-End Skills</SkillTitle>
                 {!this.state.open ?  <i className="uil uil-angle-down"></i> :  <i className="uil uil-angle-up"></i>}
             </SkillHeader>
              <CSSTransition in={this.state.open}
                  timeout={300}
                  classNames="example"
                  unmountOnExit>
                  {this.state.open ? frontElements : empty }
              </CSSTransition>
            </SkillContainer>
        </AboutContainer>
    }

}

export default SkillViewer