import React from "react";
import {connect} from 'react-redux'
import {ProgressbarCont, ProgressbarInner, SkillText, SkillTextContainer} from './AboutComponents'
class SkillComponent extends React.Component{
render() {

    return <div style={{marginTop:'10px'}}>
             <SkillText theme = {this.props.colors}>
                {this.props.children}
            </SkillText>
    <ProgressbarCont>
        <ProgressbarInner theme = {this.props.colors} percents = {this.props.percents}/>
    </ProgressbarCont>
    </div>
    
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
export default connect(mapStateToProps,mapDispatchToProps)(SkillComponent);