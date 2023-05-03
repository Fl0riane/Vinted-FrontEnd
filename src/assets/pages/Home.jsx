// import { Link } from "react-router-dom";
import picture from "../img/photohome.jpg";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState();
  const [IsLoading, setIsLoading] = useState(true);

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

  // const id = 123456;
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
      <section className="container main">
        {data.offers.map((offer) => {
          console.log(offer);
          return (
            <article key={offer._id}>
              {IsLoading ? (
                <p>Laoding...</p>
              ) : (
                <div>
                  <p>{offer.owner.account.username}</p>
                  <img
                    key={offer.product_image.url}
                    src={offer.product_image.url}
                  ></img>
                  <div>
                    <p className="price">{offer.product_price} € </p>
                    <div>
                      {offer.product_details.map((elem) => {
                        console.log(elem);
                        return (
                          <div key={elem._id}>
                            <p>{elem.TAILLE}</p>
                            <p>{elem.MARQUE}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </section>

      {/* <Link to={`/offer/${id}`}>ALLER SUR OFFER</Link> */}
    </div>
  );
};

export default Home;
