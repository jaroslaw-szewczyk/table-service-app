import React from "react";
import AppNav from "./components/AppNav/AppNav";
import Container from "react-bootstrap/Container";
import Home from "./components/Home/Home";
import { fetchTables } from "./redux/updateTablesReducer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => dispatch(fetchTables()), [dispatch]);

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
