import "./Header.css";
import logo from "../../assets/logo/logocut.png";

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
