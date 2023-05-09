import { Link } from "react-router-dom";
import "./offer.css";
const Offer = ({ offerData }) => {
  return (
    <Link to={`/offer/${offerData._id}`} key={offerData._id}>
      <article>
        <span className="user">
          {offerData.owner.account.avatar && (
            <img
              key={offerData.owner.account.avatar.secure_url}
              src={offerData.owner.account.avatar.secure_url}
              alt="avatar"
            />
          )}

          <p key={offerData.owner.account.username}>
            {offerData.owner.account.username}
          </p>
        </span>

        <img src={offerData.product_image.url} alt="article"></img>

        <p className="price">{offerData.product_price} €</p>
        <div>
          {offerData.product_details.map((detail, index) => {
            // console.log(elem);
            return (
              <div key={index}>
                <p>{detail.TAILLE}</p>
                <p>{detail.MARQUE}</p>
              </div>
            );
          })}
        </div>
      </article>
    </Link>
  );
};

export default Offer;
