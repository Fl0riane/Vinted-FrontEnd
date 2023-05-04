import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Offer from "./assets/pages/Offer";
import Home from "./assets/pages/Home";
import Header from "./assets/components/Header";
import NoMatch from "./assets/pages/NoMatch";
import SignUp from "./assets/pages/SignUp";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
