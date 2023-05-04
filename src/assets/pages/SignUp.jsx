import { useState } from "react";
import Form from "../components/Form";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleNameChange = (event) => {
    const value = event.target.value;
    setUserName(value);
  };

  return (
    // <div>
    //   <h1>S'inscrire</h1>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       placeholder="Nom d'utilisateur"
    //       type="text"
    //       name="userName"
    //       onChange={handleNameChange}
    //     />
    //     <input
    //       placeholder="Email"
    //       type="email"
    //       name="email"
    //       onChange={handleEmailChange}
    //     />
    //     <input
    //       placeholder="Mot de passe"
    //       type="password"
    //       name="password"
    //       onChange={handlePasswordChange}
    //     />
    //     <button type="submit"> S'inscrire</button>
    //   </form>
    // </div>
    <div className="container">
      <Form
        userName={userName}
        password={password}
        email={email}
        setUserName={setUserName}
        setPassword={setPassword}
        setEmail={setEmail}
        handleEmailChange={handleEmailChange}
        handleNameChange={handleNameChange}
        handlePasswordChange={handlePasswordChange}
      />
    </div>
  );
};
export default SignUp;
