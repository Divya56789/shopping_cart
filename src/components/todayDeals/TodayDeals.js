import React from "react";
import "./todayDeals.css";
import TodayDealsProduct from "./TodayDealsProduct";

const TodayDeals = ({ products, sectionRef2 }) => {
  return (
    <div className="shopcart__todayDeals" ref={sectionRef2}>
      <div className="shopcart__todayDeals__header">
        <h1>Today's Best Deals For You!</h1>
      </div>
      <div className="shopcart__todayDeals__list">
        {products &&
          products.map((item) => {
            return (
              <div key={item.id}>
                <TodayDealsProduct product={item} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TodayDeals;
