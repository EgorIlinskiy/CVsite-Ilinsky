import React from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import combineReducers from '../store/index'
import { BrowserRouter} from "react-router-dom";
import NavBar from "../components/Navbar";
import PreLoader from './PreLoader/index';
import 'normalize.css'
import '../css/index.scss'
import PageRouter from "../components/PageRouter";

let store =createStore(combineReducers)

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            isLoaded:false
        }
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                isLoaded:true
            })
        },2000)
    }

    render() {
        if(!this.state.isLoaded){
             return <PreLoader/>
         } else
        return <Provider store = {store}>
                <BrowserRouter>
                    <NavBar/>
                    <PageRouter />
                </BrowserRouter>
            </Provider>

        }
}

export default App
