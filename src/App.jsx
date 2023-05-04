import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Offer from "./assets/pages/Offer";
import Home from "./assets/pages/Home";
import Header from "./assets/components/Header";
import NoMatch from "./assets/pages/NoMatch";
import SignUp from "./assets/pages/SignUp";
import Login from "./assets/pages/Login";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
library.add(faMagnifyingGlass);

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
