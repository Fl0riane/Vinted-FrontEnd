// import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
// import axios from "axios";
// import { useState } from "react";
import { Navigate } from "react-router-dom";

const CheckoutForm = ({ token }) => {
  return token ? <p>je suis dans payment</p> : <Navigate to="/login" />;
};

export default CheckoutForm;
