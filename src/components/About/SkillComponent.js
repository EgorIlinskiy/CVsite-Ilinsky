import React from "react";
import {ProgressbarCont, ProgressbarInner, SkillText, SkillTextContainer} from './AboutComponents'
class SkillComponent extends React.Component{
render() {

    return <div style={{marginTop:'10px'}}>
             <SkillText>
                {this.props.children}
            </SkillText>
    <ProgressbarCont>
        <ProgressbarInner theme = {this.props.theme} percents = {this.props.percents}/>
    </ProgressbarCont>
    </div>
    
}
}

export default SkillComponent