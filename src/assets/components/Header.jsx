import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = ({ token, handleToken }) => {
  return (
    <header>
      <span className="container">
        <Link to="/">
          <img src={logo} alt="logo Vinted" />
        </Link>
        <div className="research">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          <input
            type="text"
            name="header input"
            placeholder="Recherche des articles"
          />
        </div>
        {token ? (
          <button
            onClick={() => {
              handleToken(null);
            }}
          >
            Se deconnecter
          </button>
        ) : (
          <div>
            <Link to="/signup">
              <button>S'inscrire</button>
            </Link>

            <Link to="/login">
              <button>Se connecter</button>
            </Link>
            <div>
              <button>Vendre tes articles</button>
            </div>
          </div>
        )}
      </span>
    </header>
  );
};

export default Header;
