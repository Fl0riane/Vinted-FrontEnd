import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const LoginForm = ({
  handleToken,
  email,
  password,
  handleEmailChange,
  handlePasswordChange,
}) => {
  const navigate = useNavigate();
  const [errorMessage, setErrormessage] = useState("");
  return (
    <div className="form">
      <h2>Se connecter</h2>

      <form
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const response = await axios.post(
              "https://lereacteur-vinted-api.herokuapp.com/user/login",
              {
                email: email,
                password: password,
              }
            );
            if (response.data.token) {
              handleToken(response.data.token);
              navigate("/");
            }
          } catch (error) {
            console.log(error.message);

            if (error.response.status === 401) {
              setErrormessage("Accès non autorisé");
            }
          }
        }}
      >
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
        <p>{errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}</p>
        <Link to="/signup">
          <p>Pas encore de compte ? Inscris-toi !</p>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
