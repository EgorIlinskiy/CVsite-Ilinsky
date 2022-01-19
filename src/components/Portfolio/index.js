import React from "react";
import {UniquePhoto,PortfolioContainer,PortfolioDescription,PortfolioTitle} from './portfolioComponents'

class PortfolioPage extends React.Component{
    render(){
        return <PortfolioContainer>
            its img
          <div>
             <PortfolioTitle>Unique</PortfolioTitle>
            <PortfolioDescription>
           This is a site made for an example of my site layout skill. <br/>
                   This example uses the following stack: HTML, SCSS, JavaScript jQuery for interactive, some libraries for animation, charts, carousel. <br/>
             This site is totaly adaptive, for fullscreens and mobile devices.    
              </PortfolioDescription>
        
          </div>
        </PortfolioContainer>
        
    }
}



export default PortfolioPage