import "./Header.css";
import logo from "../../assets/logo/lg-vector.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function Header() {
  return (
    <div className="Header">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>Navbar</div>
      <div>=</div>
    </div>
  );
}

export default Header;
