import styled from "styled-components";


export const SettingBlock = styled.div`
    display:flex;
    z-index:5;
`
export const OpenedSettings = styled.div`
    /* height:200px; */
    display:flex;
    /* top:0px;
    padding: 9px;
    position:absolute; */
    flex-direction:row;
    align-items: center;
    justify-content:space-around;
    background: ${props => props.theme.dark ? '#1f1c2c' : 'white'};
`
export const ColorPicker = styled.div`
width:20px;
height:20px;
margin:0 5px;
background-color : ${props => props.color};
border-radius:50%;
border:1px solid black;
cursor: pointer;
`