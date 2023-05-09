import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

import { Navigate } from "react-router-dom";

const CheckoutForm = ({ token, price, title }) => {
  const [IsLoading, setIsLoading] = useState("");
  const [completed, steCompleted] = useState("");
  const elements = useElements();
  const stripe = useStripe();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const carElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(carElement, {
        name: "dfrf",
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
      if (responseFromBackend.data === "succeded") {
        setIsLoading(false);
        steCompleted(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return token ? (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {completed ? (
        <p>Paiement validé</p>
      ) : (
        <button type="submit" disabled={IsLoading}>
          Paiement ok
        </button>
      )}
    </form>
  ) : (
    <Navigate to="/login" />
  );
};

export default CheckoutForm;
