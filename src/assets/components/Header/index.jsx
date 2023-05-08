import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Header = ({
  token,
  handleToken,
  visible,
  setVisible,
  research,
  setResearch,
}) => {
  const navigate = useNavigate;
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
          <button
            onClick={() => {
              handleToken(null);
            }}
          >
            Se deconnecter
          </button>
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
          <Link to="/offer/publish">
            <button>Vendre tes articles</button>
          </Link>
        </div>
      </span>
    </header>
  );
};

export default Header;
