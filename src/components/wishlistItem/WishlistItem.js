import React from "react";
import "./wishlistItem.css";
import star from "../../assets/star.svg";
import { useDispatch, useSelector } from "react-redux";
import empty_wishlist from "../../assets/empty-wishlist.png";
import delete__icon from "../../assets/delete.svg";
import { removeFromWishlist } from "../../redux/wishlist/wishlistSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const WishlistDivider = () => {
  return <div className="wishlist-divider"></div>;
};
function WishlistItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlistData = useSelector((state) => state.favourite.wishlistData);
  return (
    <div className="shopcart__wishlistPage">
      <div className="shopcart__wishlistPage__container">
        <div className="shopcart__wishlistPage__container__heading">
          <h3>My Wishlist({wishlistData.length})</h3>
        </div>
        <WishlistDivider />
        {wishlistData.length === 0 ? (
          <div className="shopcart__wishlistPage__container__empty">
            <img src={empty_wishlist} alt="empty wishlist" />
            <h3>Empty Wishlist</h3>
            <p>
              You have no items in your wishlist.{" "}
              <span onClick={() => navigate("/")}>Start adding!</span>
            </p>
          </div>
        ) : (
          wishlistData &&
          wishlistData.map((item) => {
            return (
              <div
                className="shopcart__wishlistPage__container__list"
                key={item.id}
              >
                <div className="shopcart__wishlistPage__container__list__item">
                  <div className="shopcart__wishlistPage__container__list__item__image">
                    <img src={item.image} alt="item" />
                  </div>

                  <div className="shopcart__wishlistPage__container__list__items">
                    <h4>{item.title}</h4>
                    <div className="shopcart__wishlistPage__container__list__items__rating">
                      <div className="wishlist__star__rating">
                        <p>{item.rating}</p>
                        <img src={star} alt="star" />
                      </div>

                      <p className="wishlist__review">({item.review})</p>
                    </div>

                    <div className="shopcart__wishlistPage__container__list__item__special-price">
                      <h2>${Math.trunc(item.price)}</h2>
                      <s>$1,999</s>
                      <p style={{ color: "green" }}>80% off</p>
                    </div>
                  </div>
                </div>
                <div
                  className="shopcart__wishlistPage__container__list__delete"
                  onClick={() =>
                    dispatch(removeFromWishlist(item.id)) &
                    toast.success("Item removed from your wishlist")
                  }
                >
                  <img src={delete__icon} alt="delete" />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default WishlistItem;
