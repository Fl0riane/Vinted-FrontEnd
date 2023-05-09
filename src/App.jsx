import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import Payment from "./pages/Payment";

/*-------Pages---------*/
import Offer from "./pages/Offer";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Publish from "./pages/Publish";
/*-------Components---------*/
import Header from "./components/Header";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Modal from "./components/Modal";

library.add(faMagnifyingGlass, faArrowUp, faArrowDown);

function App() {
  const [token, setToken] = useState(Cookies.get("vintedToken") || null);

  const [research, setResearch] = useState("");
  const [sort, setSort] = useState("");
  const [prixMini, setPrixMini] = useState("");
  const [prixMaxi, setPrixMaxi] = useState("");

  const handleToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("vintedToken", token, { expires: 14 });
    } else {
      setToken(null);
      Cookies.remove("vintedToken");
    }
  };
  const [visible, setVisible] = useState(false);

  return (
    <div className="app">
      <Router>
        <Header
          token={token}
          handleToken={handleToken}
          visible={visible}
          setVisible={setVisible}
          research={research}
          setResearch={setResearch}
          sort={sort}
          setSort={setSort}
          prixMaxi={prixMaxi}
          setPrixMaxi={setPrixMaxi}
          prixMini={prixMini}
          setPrixMini={setPrixMini}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                research={research}
                prixMaxi={prixMaxi}
                prixMini={prixMini}
                sort={sort}
              />
            }
          />
          <Route path="/offer/:id" element={<Offer token={token} />} />
          <Route path="*" element={<NoMatch />} />
          <Route
            path="/signup"
            element={<SignUp handleToken={handleToken} />}
          />
          <Route path="/login" element={<Login handleToken={handleToken} />} />

          <Route path="/publish" element={<Publish token={token} />} />
          <Route path="/payment" element={<Payment token={token} />} />
        </Routes>
        <Footer />
        {visible && <Modal setVisible={setVisible} />}
      </Router>
    </div>
  );
}

export default App;
