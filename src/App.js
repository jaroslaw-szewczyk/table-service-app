import React from "react";
import AppNav from "./components/AppNav/AppNav";
import Container from "react-bootstrap/Container";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import TableDetail from "./components/TableDetail/TableDetail";

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
      <Footer />
      <TableDetail/>
    </Container>
   </>
  );
}

export default App;
