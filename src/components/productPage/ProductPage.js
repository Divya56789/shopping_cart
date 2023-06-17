import React, { useEffect, useState } from "react";
import "./productPage.css";
import { useLocation } from "react-router-dom";
import star from "../../assets/star.svg";
import { addToCart } from "../../redux/cart/cartSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const ProductPage = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  let [baseQuantity, setBaseQuantity] = useState(1);
  const location = useLocation();
  useEffect(() => {
    // eslint-disable-next-line
    setDetails(location.state.item);
  }, []);
  return (
    <div className="shopcart__productPage">
      <div className="shopcart__productPage__container">
        <div className="shopcart__productPage__container__left">
          <div className="shopcart__productPage__container__left__product-image">
            <img src={details.image} alt="product" />
          </div>
        </div>
        <div className="shopcart__productPage__container__right">
          <div className="shopcart__productPage__container__right__product-name">
            <div className="shopcart__productPage__container__right__product-item">
              <h1>{details.title}</h1>
              <div className="shopcart__productPage__container__right__product__special-price">
                <p style={{ color: "green" }}>Special Price</p>
                <div className="shopcart__productPage__container__right__product-name__special-price">
                  <h1>${Math.trunc(details.price)}</h1>
                  <s>$1,999</s>
                  <p style={{ color: "green" }}>80% off</p>
                </div>
              </div>

              <div className="star__ratings__review">
              <div className="star__rating">
                {/* <p>{details.rating.rate}</p> */}
                <img src={star} alt="star" />
              </div>
              {/* <p className='review'>{details.rating.count} reviews</p> */}
              </div>

            </div>

            

            <div className="shopcart__productPage__container__right__product-description">
              <p>{details.description}</p>
            </div>
            <div className="shopcart__productPage__container__right__product__buttons">
              <div className="shopcart__productPage__container__right__product__quantity">
                <p>Quantity</p>
                <div className="shopcart__productPage__container__right__product__quantity__container">
                  <button
                    className="item-decrease"
                    onClick={() =>
                      setBaseQuantity(
                        baseQuantity === 1
                          ? (baseQuantity = 1)
                          : baseQuantity - 1
                      )
                    }
                  >
                    -
                  </button>
                  <span>{baseQuantity}</span>
                  <button
                    className="item-increase"
                    onClick={() => setBaseQuantity(baseQuantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="shopcart__productPage__container__right__button">
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: details.id,
                        title: details.title,
                        price: Math.trunc(details.price),
                        image: details.image,
                        rating: details.rating.rate,
                        review: details.rating.count,
                        quantity: baseQuantity,
                        description: details.description,
                      })
                    ) &
                    toast.success(`${details.title} successfully added to cart`)
                  }
                >
                  Add to cart
                </button>
              </div>
            </div>

            <div className="shopcart__productPage__container__right__product-category">
              <p>
                <b>Category:</b> {details.category}
              </p>
            </div>
          </div>
        </div>
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

export default ProductPage;
