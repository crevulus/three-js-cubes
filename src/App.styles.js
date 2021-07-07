import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const StyledMainContent = styled.div`
  width: 100%;
  height: 100%;
  background: #f1f4f8;
  position: fixed;
`;
