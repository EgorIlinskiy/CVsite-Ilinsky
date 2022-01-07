import React from 'react'
import MainPage from './Main/index'
import { Route, Routes } from "react-router-dom";
import About from './About/index'
/// проводить создание стора и маршрутизацию тут
class PageRouter extends  React.Component{


    render() {
        return  <Routes>
            <Route exact="true" path="/" element={<MainPage />} />
            <Route path="/about" element={ <About/>} />
            {/*<Route path="/edit" element={<EditPage />} />*/}
        </Routes>

    }
}


export default PageRouter;