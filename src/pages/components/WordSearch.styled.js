import styled from 'styled-components';

export const WordSearchContainer = styled.div`
  h1, h4 { text-align: center; }
  > div {
    text-align: center;
    width: 100%;
    height: 200px;
    line-height: 200px;
    > div {
      font-size: 48px;
      margin: 0 40px;
      border: 1px solid #333;
      border-radius: 10px;
    }
  }
  > ul {
    padding: 10px 40px;
    background: #ddd;
    list-style-type: none;
    li {
      background: white;
      display: inline-block;
      padding: 10px 20px;
      margin: 0 5px;
      border-radius: 5px;
      cursor: pointer;
      :hover{
       background: #eee;
      }
    }
  } 
`;
