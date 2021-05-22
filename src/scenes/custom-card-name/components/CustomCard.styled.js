import styled, { css } from "styled-components";

const CustomCardNameContainer = styled.div`
  padding: 50px 100px;
  min-height: 100vh;
  background: #fafafa;
  font-family: 'Lato', sans-serif;
  color: #333;
  
  h1 { 
    text-align: center;
    margin-bottom: 20px; 
  }
  
  > div {
    width: 100%;
    text-align: center;
  }
`;

const Navigation = styled.ul`
  padding: 0;
  margin: 0 -100px;
`;

Navigation.Item = styled.li`
    display: inline-block;
    width: 33.33%;
  > a {
    display: block;
    text-decoration: none;
    line-height: 45px;
    text-align: center;
    background: #ddd;
    color: #7d7d7d;
    :hover {
      background: #eaeaea;
      cursor: pointer;
    }
    
    ${({active}) => active && css`
  
      background: white;
      color: inherit;
      
      :hover { background: white }
    `}
  } 
`;

const CardNameContainer = styled.div`
  margin-top: 20px;
  display: inline-block;
  > div {;
      background: #163A41;
      color: #B38865;
      height: 250px;
      width: 415px;
      
      :first-child {
        text-transform: uppercase;
        margin-bottom: 20px;
        padding: 100px 0;
        height: 50px;
        
        hr {
          height: 2px;
          background: #B38865;
          border: none;
          margin: 0 145px;

        }
        
        h2 {
          line-height: 50px;
          text-align: center;
          letter-spacing: 8px;
          font-size: 18px;
          margin: 0;
        }
      }
    
      :last-child {
        padding: 50px 0;
        height: 150px;
        display: flex;
        align-items: center;
        > div {
          width: 50%;
          margin: 20px;
          
          :first-child { text-align: right }
          
          h4, h5 { margin: 0 }
          h4 { letter-spacing: 1.2px; }
          h5 { font-weight: normal }
          
          span {
            font-size: 13px;
            display: block;
            margin-bottom: 5px;
          }
        }
      }
  }
`;

export { Navigation, CustomCardNameContainer, CardNameContainer }