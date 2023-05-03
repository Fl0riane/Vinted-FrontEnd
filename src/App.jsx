import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Offer from "./pages/Offer";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/offer/id" element={<Offer />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
