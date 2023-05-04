const Form = ({
  userName,
  email,
  password,
  setUserName,
  setPassword,
  setEmail,
  handleEmailChange,
  handleNameChange,
  handlePasswordChange,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire
    console.log(userName, email, password);

    return (
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
        <button type="submit"> S'inscrire</button>
      </form>
    );
  };
};
export default Form;
