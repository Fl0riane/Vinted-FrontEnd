import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({
  token,
  handleToken,
  visible,
  setVisible,
  research,
  setResearch,
}) => {
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
            value={research}
            onChange={(event) => {
              setResearch(event.target.value);
            }}
          />
        </div>
        {token ? (
          <Link to="/">
            <button
              onClick={() => {
                handleToken(null);
              }}
            >
              Se deconnecter
            </button>
          </Link>
        ) : (
          <div>
            <button
              onClick={() => {
                setVisible(!visible);
              }}
            >
              S'inscrire | Se connecter
            </button>
          </div>
        )}
        <div>
          <Link to={token ? "/publish" : "/login"}>
            <button>Vendre tes articles</button>
          </Link>
        </div>
      </span>
    </header>
  );
};

export default Header;
