import { Link } from "react-router-dom";

const LoginForm = ({
  email,
  password,
  handleEmailChange,
  handlePasswordChange,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="form">
      <h2>Se connecter</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Adresse email"
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

        <button type="submit">Se connecter</button>
        <Link to="/signup">
          <p>Pas encore de compte ? Inscris-toi !</p>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
