import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  increamentQuantity,
  removeFromCart,
} from "../../redux/cart/cartSlice";
import emptycart from "../../assets/emptyCart.gif";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import delete_icon from "../../assets/delete.svg";
import star from "../../assets/star.svg";

const CartDivider = () => {
  return <div className="cart-divider"></div>;
};

function CartItems() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.shopcart.productData);
  return (
    <div className="shopcart__cartitem__itemlist">
      <div className="shopcart__cartitem__itemlist__heading">
        <h3>Cart Items</h3>
      </div>
      <CartDivider />
      {productData.length === 0 ? (
        <div className="shopcart__cartitem__itemlist__empty">
          <div className="shopcart__cartitem__itemlist__empty__image">
            <img src={emptycart} alt="empty-cart" />
          </div>
          <p>Explore our wide selection and find something you like</p>
          <Link to="/">
            <button>
              ← <span>go to shopping</span>
            </button>
          </Link>
        </div>
      ) : (
        productData &&
        productData.map((item) => {
          return (
            <div key={item.id}>
              <div className="shopcart__cartitem__itemlist__item" >
                <div className="shopcart__cartitem__itemlist__item__image">
                  <img src={item.image} alt="items" />
                </div>
                <div className="shopcart__cartitem__itemlist__item__name">
                  <h4>{item.title}</h4>
                </div>
                <div className="shopcart__cartitem__itemlist__item__price">
                  <p>${Math.trunc(item.price)}</p>
                </div>
                <div className="shopcart__cartitem__itemlist__item__quantity">
                  <p>Quantity</p>
                  <div className="shopcart__cartitem__itemlist__item__quantity__container">
                    <button
                      className="item-decrease"
                      onClick={() =>
                        dispatch(
                          decrementQuantity({
                            id: item.id,
                            title: item.title,
                            image: item.image,
                            price: Math.trunc(item.price),
                            quantity: 1,
                            description: item.description,
                          })
                        )
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="item-increase"
                      onClick={() =>
                        dispatch(
                          increamentQuantity({
                            id: item.id,
                            title: item.title,
                            image: item.image,
                            price: Math.trunc(item.price),
                            quantity: 1,
                            description: item.description,
                          })
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="shopcart__cartitem__itemlist__item__total-amount">
                  <p>$ {item.quantity * Math.trunc(item.price)}</p>
                </div>
                <div className="shopcart__cartitem__itemlist__item__remove">
                  <img
                    src={delete_icon}
                    alt="delete-icon"
                    onClick={() =>
                      dispatch(removeFromCart(item.id)) &
                      toast.error(`Item removed from your cart`)
                    }
                  />
                </div>
              </div>

              {/* for mobile design */}
              <div className="shopcart__cartitem__itemlist__mobileitem" >
                <div className="shopcart__cartitem__itemlist__mobileitem__upperbody">
                  <div className="shopcart__cartitem__itemlist__item__image">
                    <img src={item.image} alt="items" />
                  </div>
                  <div className="shopcart__cartitem__itemlist__item__details">
                    <h4>{item.title}</h4>
                    <div className="shopcart__wishlistPage__container__list__items__rating">
                      <div className="wishlist__star__rating">
                        <p>{item.rating}</p>
                        <img src={star} alt="star" />
                      </div>

                      <p className="wishlist__review">({item.review})</p>
                    </div>

                    <div className="shopcart__wishlistPage__container__list__item__special-price">
                      <h3>$ {item.quantity * Math.trunc(item.price)}</h3>
                      <s>$1,999</s>
                      <p style={{ color: "green" }}>80% off</p>
                    </div>
                  </div>
                </div>

                <div className="shopcart__cartitem__itemlist__mobileitem__lowerbody">
                  <div className="shopcart__cartitem__itemlist__item__qnt">
                    <p>Quantity</p>
                    <div className="shopcart__cartitem__itemlist__item__quantity__container">
                      <button
                        className="item-decrease"
                        onClick={() =>
                          dispatch(
                            decrementQuantity({
                              id: item.id,
                              title: item.title,
                              image: item.image,
                              price: Math.trunc(item.price),
                              quantity: 1,
                              description: item.description,
                            })
                          )
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="item-increase"
                        onClick={() =>
                          dispatch(
                            increamentQuantity({
                              id: item.id,
                              title: item.title,
                              image: item.image,
                              price: Math.trunc(item.price),
                              quantity: 1,
                              description: item.description,
                            })
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="shopcart__cartitem__itemlist__item__delete">
                    <i className="material-icons" style={{ color: "gray" }}>
                      &#xe872;
                    </i>
                    <button
                      onClick={() =>
                        dispatch(removeFromCart(item.id)) &
                        toast.success(`Item removed from your cart`)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default CartItems;
