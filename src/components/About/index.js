import React, {Fragment} from "react";
import SkillViewer from "./SkillViewer";
import { AboutMainText } from './AboutComponents'
class AboutPage extends React.Component{

    render() {
        return <Fragment>
                <AboutMainText>This is a list of my basic skills, there are also many other minor ones that I have not mentioned.</AboutMainText>
                    <SkillViewer/>
        </Fragment>
    }
}

export default AboutPage