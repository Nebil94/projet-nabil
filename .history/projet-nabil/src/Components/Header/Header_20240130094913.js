import "./Header.css";
import { Button } from "react-bootstrap";
import logo from "../../assets/logo/logo_full.png";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} height={40} alt="logo-nabil" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">HOME</Nav.Link>
            <Nav.Link href="#action2">ABOUT</Nav.Link>
            <Nav.Link href="#">SERVICES</Nav.Link>
            <Nav.Link href="#action1">PORTFOLIO</Nav.Link>
            <Nav.Link href="#action2">TARIF</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
