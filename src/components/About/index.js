import React, { Fragment } from "react";
import {connect} from 'react-redux';
import SkillViewer from "./SkillViewer";
import { AboutMainText } from './AboutComponents'
class AboutPage extends React.Component {

    render() {
        return <Fragment>
            <AboutMainText theme = { this.props.colors } > This is a list of my basic skills, there are also many other minor ones that I have not mentioned. </AboutMainText> 
            <SkillViewer/>
            </Fragment>
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
export default connect(mapStateToProps,mapDispatchToProps)(AboutPage);