import React from "react";
import AppNav from "./components/AppNav/AppNav";
import Container from "react-bootstrap/Container";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import TableDetail from "./components/TableDetail/TableDetail";
import NotFound from "./components/NotFound/NotFound";

import { fetchTables } from "./redux/updateTablesReducer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
   <>
    <AppNav />
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table/:tableId" element={<TableDetail/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
   </>
  );
}

export default App;
