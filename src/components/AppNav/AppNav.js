import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import styles from "./AppNav.module.scss";
import { NavLink } from "react-router-dom";

const AppNav = () => {
  return(
    <Navbar bg="primary" className={styles.myStyles}>
      <Container>
        <Navbar.Brand className="text-light">waiter.app</Navbar.Brand>
        <Nav.Link as={NavLink} className="text-light" to='/'>Home</Nav.Link>
      </Container>
    </Navbar>
  );
};

export default AppNav;