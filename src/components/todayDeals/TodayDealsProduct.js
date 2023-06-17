import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import star from "../../assets/star.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/wishlist/wishlistSlice";

const Favourite = ({ changeHeartColor, ischecked }) => {
  const [addToWishlist, setAddToWishlist] = useState(ischecked);
  return (
    <>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          onClick={() => {
            setAddToWishlist(!addToWishlist);
            changeHeartColor(addToWishlist);
          }}
          style={{ fill: addToWishlist === true ? "red" : "white" }}
        >
          <path d="M16.5,3C13.605,3,12,5.09,12,5.09S10.395,3,7.5,3C4.462,3,2,5.462,2,8.5c0,4.171,4.912,8.213,6.281,9.49 C9.858,19.46,12,21.35,12,21.35s2.142-1.89,3.719-3.36C17.088,16.713,22,12.671,22,8.5C22,5.462,19.538,3,16.5,3z" />
        </svg>
      </span>
    </>
  );
};

const TodayDealsProduct = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlistData = useSelector((state) => state.favourite.wishlistData);

  const _id = product.title;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const id = idString(_id);
  const navigateToProductPage = () => {
    navigate(`/product/${id}`, {
      state: {
        item: product,
      },
    });
  };

  const findWishlistId = (id) => {
    if (wishlistData.find((item) => item.id === id)) {
      return true;
    }
    return false;
  };

  return (
    <div className="shopcart__todayDeals__list__item">
      <div className="shopcart__todayDeals__list__item__content">
        <div className="shopcart__todayDeals__list__item__image">
          <img
            className="item-image"
            src={product.image}
            alt="purse"
            onClick={navigateToProductPage}
          />
          <Favourite
            ischecked={findWishlistId(product.id)}
            changeHeartColor={(ischecked) => {
              if (ischecked === false) {
                dispatch(
                  addToWishlist({
                    id: product.id,
                    image: product.image,
                    price: Math.trunc(product.price),
                    title: product.title,
                    rating: product.rating.rate,
                    review: product.rating.count,
                    description: product.description,
                  })
                );
                toast.success("Item added to wishlist");
              } else {
                dispatch(removeFromWishlist(product.id));
                toast.error("Item romoved from wishlist");
              }
            }}
          />
        </div>
        <div className="shopcart__todayDeals__list__item__title">
          <h2>{product.title.substring(0, 15)}</h2>
          <p>{product.description.substring(0, 30)}</p>
        </div>
      </div>

      <div className="star__rating">
        <p>{product.rating.rate}</p>
        <img src={star} alt="star" />
      </div>
      <div className="shopcart__todayDeals__list__item__price">
        <span>$ {Math.trunc(product.price)}</span>
      </div>
      <div className="shopcart__todayDeals__addToCart">
        <button
          type="button"
          onClick={() =>
            dispatch(
              addToCart({
                id: product.id,
                title: product.title,
                price: Math.trunc(product.price),
                image: product.image,
                rating: product.rating.rate,
                review: product.rating.count,
                quantity: 1,
                description: product.description,
              })
            ) & toast.success(`Item added to your cart`)
          }
        >
          Add to Cart
        </button>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default TodayDealsProduct;
