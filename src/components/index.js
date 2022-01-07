import React from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import combineReducers from '../store/index'
import { BrowserRouter} from "react-router-dom";
import NavBar from "../components/Navbar";
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
        },1000)
    }

    render() {
        // if(!this.state.isLoaded){
        //     return <div className="loadScreen">
        //                 <div className="ring"></div>
        //                 <div className="ring"></div>
        //                 <span className="load-text">
        //                         Loading...
        //                 </span>
        //          </div>
        // } else
        return <Provider store = {store}>
                <BrowserRouter>
                    <NavBar/>
                    <PageRouter/>
                </BrowserRouter>
            </Provider>

        }
}

export default App
