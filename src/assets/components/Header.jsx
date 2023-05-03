import logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <header className="container">
      <img src={logo} alt="logo Vinted" />
      <div>
        <button>S'inscrire</button>
        <button>Se connecter</button>
        <div>
          <button>Vendre tes articles</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
