import React from "react";
import AppNav from "./components/AppNav/AppNav";
import Container from "react-bootstrap/Container";
import Home from "./components/Home/Home";

const App = () => {
  return (
   <>
    <AppNav />
    <Container>
      <Home />
    </Container>
   </>
  );
}

export default App;
