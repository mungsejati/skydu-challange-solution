import styled from "styled-components";

const DashboardContainer = styled.div`
  padding: 10px 50px;
  > div {
    display: inline-block;
    border: 1px solid #ccc;
    margin-right: 10px;
    padding: 20px;
    min-width: 200px;
    
    div:first-child {
      font-size: 24px;
      font-weight: bold;
    }
    
    div:last-child {
      border-top: 1px solid #ccc;
      margin: 0 -20px;
      padding:10px 20px 0 20px;
      margin-top: 20px;
      text-align: right; 
      
      a { margin-right: 5px;}
    }
  }
`;

export default DashboardContainer;
