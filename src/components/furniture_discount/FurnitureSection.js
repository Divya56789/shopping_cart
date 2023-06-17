import React from "react";
import "./furnitureSection.css";

const FurnitureSection = () => {
  return (
    <div className="shopcart__furniture__discount__section">
      <div className="shopcart__furniture__discount__section__container">
        <div className="shopcart__furniture__discount__section__container-content">
          <h1>
            Get 5% Cash <br /> Back On $200
          </h1>
          <p>
            Shopping is a bit of a relaxing hobby for <br />
            me, which is sometimes troubling for the <br />
            bank balance.
          </p>
          <button type="button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default FurnitureSection;
