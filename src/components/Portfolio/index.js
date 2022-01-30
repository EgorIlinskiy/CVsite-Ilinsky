import React from "react";
import { Fragment } from "react";
import {connect} from 'react-redux'
import {PortfolioContainer,PortfolioDescription,PortfolioTitle, PortfolioAnnotation, PortfolioLink} from './portfolioComponents'
import unique from './img/unique.png'
import cvsite from './img/cvsite.png'

class PortfolioPage extends React.Component{
    render(){
        return <Fragment><PortfolioContainer img={unique}>
                    <PortfolioAnnotation>
                        <PortfolioTitle theme={this.props.theme}>Unique</PortfolioTitle>
                        <PortfolioDescription>
           This is a site made for an example of my site markup skill. <br/>
                   This example uses the following stack: HTML, SCSS, JavaScript jQuery for interactive, some libraries for animation, charts, carousel. <br/>
             This site is totaly adaptive, for fullscreens and mobile devices.    
                     </PortfolioDescription>
                     <PortfolioLink target="_blank" href="https://snowikifrost.github.io/unique/">
                        Link to Github pages >
                    </PortfolioLink>
                 </PortfolioAnnotation>
             </PortfolioContainer>
             <PortfolioContainer img={cvsite}>
             <PortfolioAnnotation>
                 <PortfolioTitle theme={this.props.theme}>My CV Site</PortfolioTitle>
                 <PortfolioDescription>
    This is a site made for an example of my React/Redux skill. It have dark/light mode, and can change main color in settings. Also can switch pages without loading.
    <br/>
            This example uses the following stack: HTML, SCSS, React, Redux, Styled-components, React Router, Webpack.
              </PortfolioDescription>
              <PortfolioLink target="_blank" href="https://snowikifrost.github.io/unique/">
                 Link to Github pages >
             </PortfolioLink>
          </PortfolioAnnotation>
      </PortfolioContainer>
      </Fragment>
        
    }
}


let mapStateToProps = function(state){
    return{
       theme: state.store.theme
    }
}

let mapDispatchToProps = function(dispatch){
    return{
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PortfolioPage);
