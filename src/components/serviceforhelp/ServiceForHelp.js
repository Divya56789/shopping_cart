import React from "react";
import "./serviceforhelp.css";
import deliveryboy from "../../assets/deliveryboy.png";
import onlinePayment from "../../assets/onlinePayment.jpg";
import safeshopping from "../../assets/safeshopping.jpg";

const ServiceForHelp = () => {
  return (
    <div className="shopcart__services__to__help__you__shop">
      <div className="shopcart__services__to__help__you__shop__heading">
        <h1>Services To Help You Shop</h1>
      </div>
      <div className="shopcart__services__to__help__you__shop__list">
        <div className="shopcart__services__to__help__you__shop__list__item">
          <div className="shopcart__services__to__help__you__shop__list__item__content">
            <h1>
              Frequently Asked <br />
              Questions
            </h1>
            <p>
              Updated on safe Shopping in <br />
              our Stores
            </p>
          </div>
          <div className="shopcart__services__to__help__you__shop__list__item__content__image">
            <img src={safeshopping} alt="safeshopping" />
          </div>
        </div>
        <div className="shopcart__services__to__help__you__shop__list__item">
          <div className="shopcart__services__to__help__you__shop__list__item__content">
            <h1>
              Online Payment <br />
              Process
            </h1>
            <p>
              Updated on safe Shopping in <br />
              our Stores
            </p>
          </div>
          <div className="shopcart__services__to__help__you__shop__list__item__content__image">
            <img src={onlinePayment} alt="onlinePayment" />
          </div>
        </div>
        <div className="shopcart__services__to__help__you__shop__list__item">
          <div className="shopcart__services__to__help__you__shop__list__item__content">
            <h1>
              Home Delivery <br />
              Options
            </h1>
            <p>
              Updated on safe Shopping in <br />
              our Stores
            </p>
          </div>
          <div className="shopcart__services__to__help__you__shop__list__item__content__image">
            <img src={deliveryboy} alt="deliveryboy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceForHelp;
