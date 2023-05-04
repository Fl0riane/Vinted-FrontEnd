import { useState } from "react";
import LoginForm from "../components/LoginForm";

const Login = () => {
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

  return (
    <LoginForm
      email={email}
      password={password}
      setPassword={setPassword}
      setEmail={setEmail}
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
    />
  );
};
export default Login;
