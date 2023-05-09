import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = ({
  username,
  email,
  password,
  handleEmailChange,
  handleNameChange,
  handlePasswordChange,
  handleToken,
}) => {
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrormessage] = useState("");
  const navigate = useNavigate();

  return (
    <div className="form">
      <h2>S'inscrire</h2>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          setErrormessage("");
          try {
            const response = await axios.post(
              "https://lereacteur-vinted-api.herokuapp.com/user/signup",
              {
                email: email,
                username: username,
                password: password,
                newsletter: true,
              }
            );
            if (response.data.token) {
              handleToken(response.data.token);
              navigate("/");
            }
            console.log(response.data);
          } catch (error) {
            console.log(error.message);
            console.log(error.response.data);

            if (error.response.status === 409) {
              setErrormessage("Cette adresse email est déjà utilisée");
            } else if (error.response.data.message === "Missing parameters") {
              setErrormessage("Veuillez remplir tous les champs");
            }
          }
        }}
      >
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
        <div>
          <input
            id="checkbox"
            type="checkbox"
            onChange={() => {
              setNewsletter(!newsletter);
            }}
            checked={newsletter}
          />
          <label htmlFor="newsletter">S'inscire à notre newsletter</label>
        </div>
        <p className="checkbox">
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans
        </p>
        <button type="submit"> S'inscrire</button>{" "}
        <p>{errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}</p>
        <Link to="/login">
          <p>Tu as déjà un compte ? Connecte-toi !</p>
        </Link>
      </form>
    </div>
  );
};

export default Form;
