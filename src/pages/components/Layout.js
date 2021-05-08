import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const LayoutContainer = styled.div`
  
`;

export default function Layout({children}) {
  return (
    <>
      <LayoutContainer>
        {children}
      </LayoutContainer>
    </>
  )
}