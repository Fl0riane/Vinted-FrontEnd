import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Payment = ({ token }) => {
  <Elements stripe={stripePromise}>
    <CheckoutForm token={token} />
  </Elements>;
};

export default Payment;
