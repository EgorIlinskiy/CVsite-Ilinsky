import React from "react";
import {connect} from 'react-redux';
import {SettingBlock, OpenedSettings,ColorPicker} from './settingComponents'

class Settings extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            isDark: false
        }
    }

    setMode = () =>{
        this.props.setTheme();
        this.setState({
            isDark: !this.state.isDark
        }, ()=>{
            if(this.state.isDark){
                document.body.style = 'background-color: #1f1c2c;';
            } else {
                document.body.style = 'background-color: white';
            }
        })
    }
    openSettings = ()=>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    closeSettings = () =>{
        this.setState({
            isOpen: false
        })
    }
    render() {
    let openedBlock = <OpenedSettings theme={this.props.colors} onClick={this.closeSettings}>
        <ColorPicker onClick={this.props.setPurple} color={"#7266d3"}/>
        <ColorPicker onClick={this.props.setRed} color={"#ff5050"}/>
        <ColorPicker onClick={this.props.setGreen} color={"#00adb5"}/>
        <ColorPicker onClick={this.props.setBlue} color={"#3366ff"}/>
    </OpenedSettings>

   return <SettingBlock>
    <i className="uil uil-setting" style={{color:this.props.colors.dark ? 'white' : 'black'}} onClick={this.openSettings}></i>
    {(this.state.isOpen) ?  openedBlock:''}
    {(this.state.isDark)?  <i className="uil uil-moon" onClick={this.setMode}></i> : <i className = "uil uil-sun" onClick={this.setMode}></i>      }    
   </SettingBlock>              
}}


let mapStateToProps = function(state){
    return{
        colors: state.store
    }
}

let mapDispatchToProps = function(dispatch){
    return{
        setRed: ()=>dispatch({
            type:'SET_RED',
        }),
        setBlue: ()=>dispatch({
            type:'SET_BLUE',
        }),
        setPurple: ()=>dispatch({
            type:'SET_PURPLE',
        }),
        setGreen: ()=>dispatch({
            type:'SET_GREEN',
        }),
        setTheme: ()=>dispatch({
            type:'SET_MODE',
        })
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Settings);
