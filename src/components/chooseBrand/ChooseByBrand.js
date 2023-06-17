import React from "react";
import "./choosebybrand.css";
import brandlogo1 from "../../assets/brand_logo1.svg";
import brandlogo2 from "../../assets/brand__logo2.svg";
import brandlogo3 from "../../assets/brand_logo3.svg";
import brandlogo4 from "../../assets/brand__logo4.svg";
import brandlogo5 from "../../assets/brand__logo5.svg";
import brandlogo6 from "../../assets/brand__logo6.svg";
import brandlogo7 from "../../assets/brand__logo7.svg";
import brandlogo8 from "../../assets/brand__logo8.svg";

const ChooseByBrand = () => {
  return (
    <div className="shopcart__choosebybrand">
      <div className="shopcart__choosebybrand__heading">
        <h1>Choose By Brand</h1>
      </div>
      <div className="shopcart__choosebybrand__list">
        <div className="shopcart__choosebybrand__list__item">
          <div className="shopcart__choosebybrand__list__item__brandlogo">
            <img src={brandlogo1} alt="brandlogo" />
          </div>
          <div className="shopcart__choosebybrand__list__item__brand">
            <h3>Starples</h3>
            <p>Delivery with in 24 hours</p>
          </div>
        </div>
        <div className="shopcart__choosebybrand__list__item">
          <div className="shopcart__choosebybrand__list__item__brandlogo">
            <img src={brandlogo2} alt="brandlogo" />
          </div>
          <div className="shopcart__choosebybrand__list__item__brand">
            <h3>Sprouts</h3>
            <p>Delivery with in 24 hours</p>
          </div>
        </div>
        <div className="shopcart__choosebybrand__list__item">
          <div className="shopcart__choosebybrand__list__item__brandlogo">
            <img src={brandlogo3} alt="brandlogo" />
          </div>
          <div className="shopcart__choosebybrand__list__item__brand">
            <h3>Grocery outlet</h3>
            <p>Delivery with in 24 hours</p>
          </div>
        </div>
        <div className="shopcart__choosebybrand__list__item">
          <div className="shopcart__choosebybrand__list__item__brandlogo">
            <img src={brandlogo4} alt="brandlogo" />
          </div>
          <div className="shopcart__choosebybrand__list__item__brand">
            <h3>Mobile stones</h3>
            <p>Delivery with in 24 hours</p>
          </div>
        </div>
        <div className="shopcart__choosebybrand__list__item">
          <div className="shopcart__choosebybrand__list__item__brandlogo">
            <img src={brandlogo5} alt="brandlogo" />
          </div>
          <div className="shopcart__choosebybrand__list__item__brand">
            <h3>Sprots Basement</h3>
            <p>Delivery with in 24 hours</p>
          </div>
        </div>
        <div className="shopcart__choosebybrand__list__item">
          <div className="shopcart__choosebybrand__list__item__brandlogo">
            <img src={brandlogo6} alt="brandlogo" />
          </div>
          <div className="shopcart__choosebybrand__list__item__brand">
            <h3>Container Store</h3>
            <p>Delivery with in 24 hours</p>
          </div>
        </div>
        <div className="shopcart__choosebybrand__list__item">
          <div className="shopcart__choosebybrand__list__item__brandlogo">
            <img src={brandlogo7} alt="brandlogo" />
          </div>
          <div className="shopcart__choosebybrand__list__item__brand">
            <h3>Target</h3>
            <p>Delivery with in 24 hours</p>
          </div>
        </div>
        <div className="shopcart__choosebybrand__list__item">
          <div className="shopcart__choosebybrand__list__item__brandlogo">
            <img src={brandlogo8} alt="brandlogo" />
          </div>
          <div className="shopcart__choosebybrand__list__item__brand">
            <h3>Bevmol</h3>
            <p>Delivery with in 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseByBrand;
