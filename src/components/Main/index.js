import React from "react";
import {Container, MainPageContainer, MainPageAbout, MainPageH1, MainPageButton,
MainPageText, MainPageDesc, MainPagePhoto,ColoredText, MainPageLinks,MainPageLink} from './mainComponents'
import {connect} from 'react-redux'
import photo from './photo.png'


class MainPage extends  React.Component{

    render() {
   return  <Container>
       <MainPageContainer>
          <MainPageLinks>
              <MainPageLink theme={this.props.colors} target="_blank" href="https://www.linkedin.com/in/егор-ильинский-1770b2159/"><i className="uil uil-linkedin-alt"></i></MainPageLink>
              <MainPageLink theme={this.props.colors} target="_blank" href="https://github.com/Snowikifrost" > <i className="uil uil-github-alt"></i></MainPageLink>
              <MainPageLink theme={this.props.colors} target="_blank" href="https://vk.com/imaquetzal" ><i className="uil uil-vk-alt"></i></MainPageLink>
          </MainPageLinks>
           <MainPageAbout>
               <MainPageH1 theme={this.props.colors}>
                   Hi, i'am <ColoredText theme={this.props.colors}>Egor</ColoredText>
               </MainPageH1>
               <MainPageDesc >
                  <ColoredText theme={this.props.colors}>
                      Fullstack JavaScript Developer
                  </ColoredText>
               </MainPageDesc>
               <MainPageText theme={this.props.colors}>
                   Junior fullstack developer with good knowledge in development and web design, producing
                   quality work!
               </MainPageText>
                <MainPageButton target="_blank" href="https://docs.google.com/document/d/1_anVN6o1vIl2SNX4vktiSolylYzKLHJCEIBFZpxMAZs/edit?usp=sharing" theme={this.props.colors}>
                    See CV <i className="uil uil-share"></i>
                </MainPageButton>
           </MainPageAbout>
           <MainPagePhoto>
               <svg className="mainBlob" style={{fill: this.props.colors.theme}} viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg">
                   <mask id="mask0" mask-type="alpha">
                       <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"></path>
                   </mask>
                   <g mask="url(#mask0)">
                       <path
                           d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"></path>
                       <image className='blobImage' x='0' y='20' xlinkHref={photo}/>
                   </g>  </svg>
           </MainPagePhoto>
       </MainPageContainer>
   </Container>

    }
}


let mapStateToProps = function(state){
    return{
       colors: state.store
    }
}

let mapDispatchToProps = function(dispatch){
    return{
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MainPage);
