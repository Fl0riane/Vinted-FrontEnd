import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const CheckoutForm = ({ token, price, title }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [completed, steCompleted] = useState(false);
  const elements = useElements();
  const stripe = useStripe();
  const fdp = 0.8;
  const protect = 0.4;
  const total = price + fdp + protect;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const cardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElement, {
        name: "",
      });
      console.log(stripeResponse);
      const stripeToken = stripeResponse.token.id;
      const responseFromBackend = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",

        {
          token: stripeToken,
          title: title,
          amount: price,
        }
      );
      console.log(responseFromBackend.data);
      if (responseFromBackend.data === "succeeded") {
        setIsLoading(false);
        steCompleted(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return token ? (
    <section className="post">
      <form onSubmit={handleSubmit}>
        <div className="littlePost">
          <p>Résumé de la commande</p>
          <div>
            <span>
              <h4>Commande</h4>
              <h4>{price} €</h4>
            </span>
            <span>
              <h4>Frais protection acheteurs</h4> <h4> {protect} €</h4>
            </span>
            <span>
              <h4>Frais de port</h4>
              <h4>{fdp} €</h4>
            </span>
          </div>

          <div>
            <h2>Total</h2> <h2>{total.toFixed(2)} €</h2>
            <h2>
              Il ne vous reste plus qu'un étape pour vous offrir {title}. Vous
              allez payer {total}€ (frais de protection et frais de port
              inclus).
            </h2>
          </div>

          <CardElement />

          {completed ? (
            <p>paiement validé</p>
          ) : (
            <button type="submit" disabled={isLoading}>
              Pay
            </button>
          )}
        </div>
      </form>
    </section>
  ) : (
    <Navigate to="/login" />
  );
};

export default CheckoutForm;
