import backgroundimg from "../img/photohome.jpg";
import axios from "axios";
import { useState, useEffect } from "react";
import Offer from "../components/Offer";
const Home = ({ research }) => {
  const [data, setData] = useState();
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?title=${research}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [research]);

  return IsLoading ? (
    <p>Page is Loading</p>
  ) : (
    <div>
      <section className="hero">
        <img src={backgroundimg} alt="background" />
        <div>
          <h1>Prêts à faire du tri dans vos placards?</h1>
          <button> Vends maintenant</button>
          <a href="https://www.vinted.fr/how_it_works">
            Découvrir commment ça marche
          </a>
        </div>
      </section>
      <section className="container main">
        {data.offers.map((offer) => {
          return <Offer key={offer._id} offerData={offer} />;
        })}
      </section>
    </div>
  );
};

export default Home;
