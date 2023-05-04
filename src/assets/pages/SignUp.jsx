import { useState } from "react";
import Form from "../components/Form";
import axios from "axios";
import { useEffect } from "react";

const SignUp = () => {
  const [data, setData] = useState({});
  const [IsLoading, setIsLoading] = useState(true);
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/signup`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return IsLoading ? (
    <p>Loading...</p>
  ) : (
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
