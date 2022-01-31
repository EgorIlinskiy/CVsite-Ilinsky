import React from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import combineReducers from '../store/index'
import NavBar from "../components/Navbar";
import PreLoader from './PreLoader/index';
import 'normalize.css'
import '../css/index.scss'
import PageRouter from "../components/PageRouter";
import {HashRouter} from 'react-router-dom';
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
                <HashRouter base='/'>
                    <NavBar/>
                    <PageRouter />
                </HashRouter>
            </Provider>

        }
}

export default App
