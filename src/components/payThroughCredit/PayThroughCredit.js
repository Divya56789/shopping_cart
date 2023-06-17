import React from "react";
import "./paythroughcredit.css";
import creditcard from "../../assets/creditcards2.png";
const PayThroughCredit = () => {
  return (
    <div className="shopcart__pay__through__creditcard">
      <div className="shopcart__pay__through__creditcard__card">
        <h1>Get 5% Cash Back</h1>
        <p>on Shopcart.com</p>
        <button type="button">Learn More</button>
      </div>
      <div className="shopcart__pay__through__creditcard__card__image">
        <img src={creditcard} alt="creditcard" />
      </div>
    </div>
  );
};

export default PayThroughCredit;
