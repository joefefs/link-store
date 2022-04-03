import "./NavBar.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <nav>
      <div className="nav-container">
        <Link to="/">
          <Logo className="logo" />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
