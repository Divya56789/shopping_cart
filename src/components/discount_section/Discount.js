import React from "react";
import "./discount.css";
import womenShirt from "../../assets/women-tshirt.jpg";
import jwellery from "../../assets/jwellery.jpg";
import electronics from "../../assets/electronics.jpg";
import mensShirt from "../../assets/men-tshirts.jpg";

const Discount = ({ sectionRef3 }) => {
  return (
    <div className="shopcart__discount__section" ref={sectionRef3}>
      <div className="shopcart__discount__section__heading">
        <h1>Get Up To 70% Off</h1>
      </div>
      <div className="shopcart__discount__section__list">
        <div
          className="shopcart__discount__section__list__item"
          data-content-type="container1"
        >
          <div className="shopcart__discount__section__list__item__content">
            <h3>Save</h3>
            <h1 className="container1-h1">$100</h1>
            <p>
              Explore Our new collection of <br />
              Women's t-shirt
            </p>
          </div>
          <div className="shopcart__discount__section__list__item__content-image">
            <img src={womenShirt} alt="furniture" />
          </div>
        </div>
        <div
          className="shopcart__discount__section__list__item"
          data-content-type="container2"
        >
          <div className="shopcart__discount__section__list__item__content">
            <h3>Save</h3>
            <h1 className="container2-h1">$29</h1>
            <p>
              Enjoy Discount on all types of <br />
              Jwellery item
            </p>
          </div>
          <div className="shopcart__discount__section__list__item__content-image">
            <img src={jwellery} alt="books" />
          </div>
        </div>
        <div
          className="shopcart__discount__section__list__item"
          data-content-type="container3"
        >
          <div className="shopcart__discount__section__list__item__content">
            <h3>Save</h3>
            <h1 className="container3-h1">$67</h1>
            <p>
              Enjoy Discount on all types of <br />
              Electronics accesories.{" "}
            </p>
          </div>
          <div className="shopcart__discount__section__list__item__content-image">
            <img src={electronics} alt="men-clothes" />
          </div>
        </div>
        <div
          className="shopcart__discount__section__list__item"
          data-content-type="container4"
        >
          <div className="shopcart__discount__section__list__item__content">
            <h3>Save</h3>
            <h1 className="container4-h1">$59</h1>
            <p>
              Explore Our all types Dresses <br />
              for Men
            </p>
          </div>
          <div className="shopcart__discount__section__list__item__content-image">
            <img src={mensShirt} alt="schoolbag" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
