import styled from 'styled-components'


export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  @media (max-width: 1000px) {
  }
`

export  const MainPageContainer = styled.div`
  margin:8% 50px 0 50px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const MainPageAbout = styled.div`
  width: 545px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export  const  MainPageH1 = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 3.5rem;

`
export const MainPageButton = styled.a` 
  background-color: #7266d3;
  display: inline-block;
  color: #fff;
  padding: .75rem 2.5rem;
  border-radius: .5rem;
  transition: .3s;
  width: 100px;
  cursor: pointer;
  text-align: center;
        &:hover{
          background: #786ce4;
          box-shadow: 0px 10px 36px rgba(0, 0, 0, 0.15);
        }
`

export const MainPageText = styled.p`
    font-size: 1.2rem;
`
export const MainPageDesc = styled.span`
    font-size: 1.2rem;
    margin-top: 5px;
`
export const ColoredText = styled.span`
  color: ${props => props.theme};
`
export  const  MainPagePhoto = styled.div`
    box-sizing: border-box;
    min-width: 400px;
`

export  const MainPageLinks =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export  const MainPageLink = styled.a`
  cursor: pointer;
  margin: 15px 0;
  font-size: 1.4rem;
  transition: 0.3s;
  color:black;
  &:hover{
    opacity: 0.9;
    color: ${props => props.theme};

  }
`