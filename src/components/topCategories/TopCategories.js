import React from "react";
import "./topCategories.css";
import furniture from "../../assets/furniture.avif";
import beauty from "../../assets/beauty.png";
import books from "../../assets/books.png";
import fashion from "../../assets/fashion.png";
import handbag from "../../assets/handbag.png";
import sneakers from "../../assets/sneakers.png";
import travel from "../../assets/travel.png";
import technology from "../../assets/Tech.png";

const TopCategories = ({ sectionRef1 }) => {
  return (
    <div className="shopcart__topCategories" ref={sectionRef1}>
      <div className="shopcart__topCategories__list">
        <div className="shopcart__topCategories__list__heading">
          <h1>Shop Our Top Categories</h1>
        </div>
        <div className="shopcart__topCategories__list__item">
          <div className="list__item">
            <img src={furniture} alt="furniture" />
            <h3>Furniture</h3>
          </div>
          <div className="list__item">
            <img src={beauty} alt="beauty" />
            <h3>Beauty</h3>
          </div>
          <div className="list__item">
            <img src={books} alt="books" />
            <h3>Books</h3>
          </div>
          <div className="list__item">
            <img src={fashion} alt="fahsion" />
            <h3>Fashion</h3>
          </div>
          <div className="list__item">
            <img src={handbag} alt="handbags" />
            <h3>Handbags</h3>
          </div>
          <div className="list__item">
            <img src={sneakers} alt="sneakers" />
            <h3>Sneakers</h3>
          </div>
          <div className="list__item">
            <img src={travel} alt="travel" />
            <h3>Travel</h3>
          </div>
          <div className="list__item">
            <img src={technology} alt="technology" />
            <h3>Electronics</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
