import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const AppNav = () => {
  return(
    <Navbar bg="primary">
      <Container>
        <Navbar.Brand className="text-light">waiter.app</Navbar.Brand>
        <Nav.Link className="text-light" href='#home'>Home</Nav.Link>
      </Container>
    </Navbar>
  );
};

export default AppNav;