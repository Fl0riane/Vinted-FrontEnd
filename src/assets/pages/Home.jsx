import backgroundimg from "../img/photohome.jpg";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
          return (
            <Link to={`/offer/${offer._id}`} key={offer._id}>
              <article>
                <span className="user">
                  {offer.owner.account.avatar && (
                    <img
                      src={offer.owner.account.avatar.secure_url}
                      alt="avatar"
                    />
                  )}

                  <p>{offer.owner.account.username}</p>
                </span>

                <img
                  key={offer.product_image.url}
                  src={offer.product_image.url}
                  alt="article"
                ></img>

                <p className="price">{offer.product_price} € </p>
                <div>
                  {offer.product_details.map((detail) => {
                    // console.log(elem);
                    return (
                      <div key={detail._id}>
                        <p>{detail.TAILLE}</p>
                        <p>{detail.MARQUE}</p>
                      </div>
                    );
                  })}
                </div>
              </article>
            </Link>
          );
        })}
      </section>

      {/* <Link to={`/offer/${id}`}>ALLER SUR OFFER</Link> */}
    </div>
  );
};

export default Home;
