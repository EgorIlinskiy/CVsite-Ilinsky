import React from "react";

class SkillComponent extends React.Component{
render() {
    return <div>
        <div style={{border:'1px solid black', height:'2px'}}>
            <div className={'Skilltext'}>HTML</div>
            <div style={{background: this.props.theme, width: this.props.percents, height:'2px' }}></div>
        </div>
    </div>
}
}

export default SkillComponent