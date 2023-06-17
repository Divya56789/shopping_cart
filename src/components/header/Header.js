import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="shopcart__header">
      <div className="header__content">
        <div className="header__content__title">
          <h1>
            Shopping And <br /> Department Store.
          </h1>
        </div>
        <div className="header__content__subtitle">
          <p>
            Shopping is a bit of a relaxing hobby for me, which <br /> is
            sometimes troubling for the bank balance.
          </p>
        </div>
        <div className="header__btn">
          <button type="button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
