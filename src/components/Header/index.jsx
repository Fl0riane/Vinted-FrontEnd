import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({
  token,
  handleToken,
  visible,
  setVisible,
  research,
  setResearch,
  prixMini,
  setPrixMini,
  prixMaxi,
  setPrixMaxi,
  sort,
  setSort,
}) => {
  return (
    <header>
      <section className="container">
        <Link to="/">
          <img src={logo} alt="logo Vinted" />
        </Link>
        <span>
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
          <div>
            <div>
              <h5>trier par</h5>
              <button
                onClick={() => {
                  setSort("price-desc");
                }}
              >
                <FontAwesomeIcon icon="fa-solid fa-arrow-down" />
              </button>
              <button
                onClick={() => {
                  setSort("price-asc");
                }}
              >
                <FontAwesomeIcon icon="fa-solid fa-arrow-up" />
              </button>
            </div>
            <div>
              <h5>trier par prix</h5>
              <input
                type="text"
                name="header input"
                placeholder="prix minimum"
                value={prixMini}
                onChange={(event) => {
                  setPrixMini(event.target.value);
                }}
              ></input>

              <input
                type="text"
                name="header input"
                placeholder="prix maximum"
                value={prixMaxi}
                onChange={(event) => {
                  setPrixMaxi(event.target.value);
                }}
              ></input>
            </div>
          </div>
        </span>

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
      </section>
    </header>
  );
};

export default Header;
