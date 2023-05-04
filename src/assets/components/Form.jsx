import { Link } from "react-router-dom";

const Form = ({
  userName,
  email,
  password,
  handleEmailChange,
  handleNameChange,
  handlePasswordChange,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire
    console.log(userName, email, password);
  };
  const handleCheck = () => {
    return <p>chheck</p>;
  };
  return (
    <div className="form">
      <h2>S'inscrire</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nom d'utilisateur"
          type="text"
          name="userName"
          onChange={handleNameChange}
        />
        <input
          placeholder="Email"
          type="email"
          name="email"
          onChange={handleEmailChange}
        />
        <input
          placeholder="Mot de passe"
          type="password"
          name="password"
          onChange={handlePasswordChange}
        />
        <input
          type="checkbox"
          placeholder="S'inscrire à notre newletter"
          onChange={() => {
            handleCheck();
          }}
        />
        <p className="checkbox">
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans
        </p>
        <button type="submit"> S'inscrire</button>
        <Link to="/login">
          {" "}
          <p>Tu as déjà un compte ? Connecte-toi !</p>
        </Link>
      </form>
    </div>
  );
};

export default Form;
