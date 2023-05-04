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
  );
};
export default SignUp;
