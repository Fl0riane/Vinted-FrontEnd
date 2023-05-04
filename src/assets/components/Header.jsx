import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <header>
      <span className="container">
        <Link to="/">
          <img src={logo} alt="logo Vinted" />
        </Link>

        <div>
          <Link to="/signup">
            <button>S'inscrire</button>
          </Link>

          <button>Se connecter</button>
          <div>
            <button>Vendre tes articles</button>
          </div>
        </div>
      </span>
    </header>
  );
};

export default Header;
