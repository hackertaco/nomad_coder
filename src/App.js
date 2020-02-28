import React, { Component } from "react";
import styled, {
  createGlobalStyle,
  css,
  ThemeProvider
} from "styled-components";
import theme from "./theme";
const GlobalStyle = createGlobalStyle`
body{
  padding: 0;
  margin: 0;
}`;
const Card = styled.div`
  background-color: red;
`;
const Button = styled.button`
  border-radius: 50%;
  background-color: ${props => props.theme.successColor};
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          <Form />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdc3c7;
`;
const Form = () => (
  <Card>
    <Button>hello</Button>
  </Card>
);

export default App;
