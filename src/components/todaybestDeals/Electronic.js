import React from "react";
import heart from "../../assets/heart.svg";
import star from "../../assets/star.svg";

function Electronic({ electronicProduct }) {
  return (
    <div className="shopcart__todaybestdeals__section">
      {electronicProduct &&
        electronicProduct.map((item) => {
          return (
            <div
              className="shopcart__todaybestdeals__sections__item"
              key={item.id}
            >
              <div className="shopcart__todaybestdeals__sections__item__content">
                <div className="shopcart__todaybestdeals__sections__item__content__image">
                  <img className="item-image" src={item.image} alt="purse" />
                  <span>
                    <img className="heart-logo" src={heart} alt="heart" />
                  </span>
                </div>
                <div className="shopcart__todaybestdeals__sections__item__content__title">
                  <h2>{item.title.substring(0, 15)}</h2>
                  <p>{item.description.substring(0, 30)}</p>
                </div>
              </div>

              <div className="star__rating">
                <p>{item.rating.rate}</p>
                <img src={star} alt="star" />
              </div>
              <div className="shopcart__todaybestdeals__sections__item__content__price">
                <span>$ {Math.trunc(item.price)}</span>
              </div>
              <div className="shopcart__todaybestdeals__sections__item__content__addToCart">
                <button type="button">Add to Cart</button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Electronic;
