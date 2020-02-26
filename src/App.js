import React, { Component } from "react";
import styled, { createGlobalStyle, css, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  padding: 0;
  margin: 0;
}`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Button success />
        <Button danger />
        <Button href="https://google.com" as="a">
          go to google
        </Button>
      </Container>
    </React.Fragment>
  );
}
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdc3c7;
  a {
    text-decoration: none;
  }
`;
const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => (props.danger ? "#9b3c31" : "#2ecc71")};
  ${props => {
    if (props.danger) {
      return css`
        animation: ${Rotation} 2s linear infinite;
      `;
    }
  }}
`;
const Rotation = keyframes`
from{
  transform : rotate(0deg)
}
to{
  transform : rotate(360deg)
}`;
export default App;
