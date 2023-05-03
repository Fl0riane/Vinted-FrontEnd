import { Link } from "react-router-dom";
import picture from "../img/photohome.jpg";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState();
  const [IsLoading, setIsLoading] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const id = 123456;
  return IsLoading ? (
    <p>Page is Loading</p>
  ) : (
    <div>
      <section className="hero">
        <img src={picture} alt="photo de fond" />
        <div>
          <h1>Prêts à faire du tri dans vos placards?</h1>
          <button> Vends maintenant</button>
          <a href="https://www.vinted.fr/how_it_works">
            Découvrir commment ça marche
          </a>
        </div>
      </section>
      <section className="container">
        {data.offers.map((offer) => {
          console.log(offer);
          return (
            <div key={offer._id}>
              <p>{offer.owner.account.usernme}</p>
            </div>
          );
        })}
      </section>

      <Link to={`/offer/${id}`}>ALLER SUR OFFER</Link>
    </div>
  );
};

export default Home;
