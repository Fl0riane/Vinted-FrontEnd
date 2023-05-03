import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Offer from "./assets/pages/Offer";
import Home from "./assets/pages/Home";
import Header from "./assets/components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/offer/:id" element={<Offer />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
