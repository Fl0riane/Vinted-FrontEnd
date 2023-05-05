import { useState } from "react";
import Form from "../components/Form";

const SignUp = ({ handleToken }) => {
  const [username, setUsername] = useState("");
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
    setUsername(value);
  };

  return (
    <Form
      username={username}
      password={password}
      email={email}
      setUsername={setUsername}
      setPassword={setPassword}
      setEmail={setEmail}
      handleEmailChange={handleEmailChange}
      handleNameChange={handleNameChange}
      handlePasswordChange={handlePasswordChange}
      handleToken={handleToken}
    />
  );
};
export default SignUp;
