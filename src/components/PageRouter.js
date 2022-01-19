import React from 'react'
import MainPage from './Main/index'
import { Route, Routes } from "react-router-dom";
import AboutPage from './About/index'
import PortfolioPage from './Portfolio';
/// проводить создание стора и маршрутизацию тут
class PageRouter extends  React.Component{


    render() {
        return  <Routes>
            <Route exact="true" path="/" element={<MainPage />} />
            <Route path="/about" element={ <AboutPage/>} />
            <Route path="/portfolio" element={ <PortfolioPage/>} />
            {/*<Route path="/edit" element={<EditPage />} />*/}
        </Routes>

    }
}


export default PageRouter;