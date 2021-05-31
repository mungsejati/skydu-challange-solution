import React from "react";
import styled from "styled-components";

const LayoutContainer = styled.div`
  h1 {
    text-align: center;
    margin: 20px;
  }
`;

function Layout({children}) {
  return (
    <LayoutContainer>
      {children}
    </LayoutContainer>
  )
}

export default Layout;