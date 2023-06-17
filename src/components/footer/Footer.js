import React from "react";
import "./footer.css";
import shopcart from "../../assets/shopcart.svg";
import stripe from "../../assets/stripe.svg";
import visa from "../../assets/visa.svg";
import mastercard from "../../assets/mastercard_logo.svg";
import amazon from "../../assets/amazon.svg";
import paytm from "../../assets/paytm.svg";
import paypal from "../../assets/paypal.svg";
import applepay from "../../assets/Apple Pay.svg";
import google from "../../assets/google.svg";
import help from "../../assets/help.svg";
import seller from "../../assets/bag.svg";
import gift from "../../assets/gift.svg";

const Divider = () => {
  return <div className="divider"></div>;
};

const Footer = () => {
  return (
    <>
      <div className="shopcart__footer">
        <div className="shopcart__footer__left">
          <div className="shopcart__footer__left__logo">
            <img src={shopcart} alt="logo" />
            <h1>Shopcart</h1>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua <br />
            dolor do amet sint. Velit officia consequat duis enim velit <br />
            mollit.
          </p>
          <h3>Accepted Payments</h3>
          <div className="shopcart__footer__left__logo__img">
            <div className="shopcart__footer__left__logo__image__section1">
              <img src={stripe} alt="stripe" />
              <img src={visa} alt="visa" />
              <img src={mastercard} alt="mastercard" />
              <img src={amazon} alt="amazon" />
            </div>
            <div className="shopcart__footer__left__logo__image__section2">
              <img src={paytm} alt="paytm" />
              <img src={paypal} alt="paypal" />
              <img src={applepay} alt="applepay" />
              <img src={google} alt="google" />
            </div>
          </div>
        </div>
        <div className="shopcart__footer__department">
          <h2>Departments</h2>
          <ul>
            <li>Fashion</li>
            <li>Education Product</li>
            <li>Frozen Food</li>
            <li>Beverages</li>
            <li>Organic Grocery</li>
            <li>Office Supplies</li>
            <li>Beauty Products</li>
            <li>Books</li>
            <li>Electronics & Gadget</li>
            <li>Travel Accesories</li>
            <li>Fitness</li>
            <li>Sneakers</li>
            <li>Toys</li>
            <li>Furniture</li>
          </ul>
        </div>
        <div className="shopcart__footer__about__us">
          <h2>About us</h2>
          <ul>
            <li>About shopcart</li>
            <li>Careers</li>
            <li>News & Blog</li>
            <li>Help</li>
            <li>Press Center</li>
            <li>Shop by location</li>
            <li>Shopcart brands</li>
            <li>Affiliate & Partners</li>
            <li>Ideas & Guides</li>
          </ul>
        </div>
        <div className="shopcart__footer__services">
          <h2>Services</h2>
          <ul>
            <li>Gift Card</li>
            <li>Mobile App</li>
            <li>Shipping & Delivery</li>
            <li>Order Pickup</li>
            <li>Account Signup</li>
          </ul>
        </div>
        <div className="shopcart__footer__help">
          <h2>Help</h2>
          <ul>
            <li>Shopcart Help</li>
            <li>Returns</li>
            <li>Track Orders</li>
            <li>Contact us</li>
            <li>Feedback</li>
            <li>Security & Fraud</li>
          </ul>
        </div>
      </div>
      <Divider />
      <div className="footer">
        <div className="footer__leftpart">
          <div className="become__seller">
            <img src={seller} alt="seller" />
            <h4>Become Seller</h4>
          </div>
          <div className="gift__cards">
            <img src={gift} alt="gift" />
            <h4>Gift Cards</h4>
          </div>
          <div className="help__center">
            <img src={help} alt="help" />
            <h4>Help Center</h4>
          </div>
        </div>
        <div className="footer__middlepart">
          <h4>Terms of Use</h4>
          <h4>Privacy Policy</h4>
        </div>
        <div className="footer__rightpart">
          <h4>All Right reserved by Divya | 2023</h4>
        </div>
      </div>
    </>
  );
};

export default Footer;
