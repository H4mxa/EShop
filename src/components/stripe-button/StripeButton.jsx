import React from "react";
import logo from "assets/eshop.svg";
import StripeCheckOut from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    "pk_test_51JTQTzLlNeJh9bE1lRtuyEE5m0rAGzoy5htLKvbBE1eQdRNM1mk5cJEXK5JI8dFUqwjLPBS7RNf4cN83R2JiEI8X005pEZspXg";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckOut
      label="Pay Now"
      name="EShop Ltd."
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeButton;
