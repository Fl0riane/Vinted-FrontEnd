import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Offer = ({ token }) => {
  const [data, setData] = useState({});
  const [IsLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  // console.log({ id });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);
  return IsLoading ? (
    <p>Loading...</p>
  ) : (
    <section className="offer">
      <article key={data._id}>
        <img src={data.product_image.url} alt="article"></img>
        <div>
          <h3>{data.product_price} €</h3>{" "}
          <div className="top">
            {data.product_details.map((detail, index) => {
              const keyName = Object.keys(detail)[0];
              return (
                <div className="details" key={index}>
                  <span> {keyName} : </span>
                  <span> {detail[keyName]}</span>
                </div>
              );
            })}
          </div>
          <div className="bottom">
            <p>{data.product_name}</p>
            <p>{data.product_description}</p>
            <div className="user">
              {data.owner.account.avatar && (
                <img src={data.owner.account.avatar.secure_url} alt="avatar" />
              )}
              <p>{data.owner.account.username}</p>
            </div>
          </div>
          <div>
            <Link to={token ? "/payment" : "/login"}>
              <button>Acheter</button>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Offer;
