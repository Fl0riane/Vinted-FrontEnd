import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

/*-------Pages---------*/
import Offer from "./assets/pages/Offer";
import Home from "./assets/pages/Home";
import NoMatch from "./assets/pages/NoMatch";
import SignUp from "./assets/pages/SignUp";
import Login from "./assets/pages/Login";

/*-------Components---------*/
import Header from "./assets/components/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
library.add(faMagnifyingGlass);

function App() {
  const [token, setToken] = useState(Cookies.get("vintedToken") || null);

  const handleToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("vintedToken", token, { expires: 14 });
    } else {
      setToken(null);
      Cookies.remove("vintedToken");
    }
  };

  return (
    <Router>
      <Header token={token} handleToken={handleToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/signup" element={<SignUp handleToken={handleToken} />} />
        <Route
          path="/login"
          element={<Login handleToken={handleToken} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
