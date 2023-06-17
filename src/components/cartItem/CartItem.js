import React, { useEffect, useState } from "react";
import "./cartItem.css";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { ToastContainer, toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { resetCart } from "../../redux/cart/cartSlice";

const CartDivider = () => {
  return <div className="cart-divider"></div>;
};
const DotDivider = () => {
  return <div className="dot-divider"></div>;
};
function CartItem() {
  const productData = useSelector((state) => state.shopcart.productData);
  const userInfo = useSelector((state) => state.shopcart.userInfo);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState();
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalPrice(price);
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error(`Please sign in before placing order`);
    }
  };

  const payment = (token) => {
    axios.post("http://localhost:8000/pay", {
      amount: totalPrice * 100,
      token: token,
    });
    toast.success("Payment Successful");
    dispatch(resetCart());
  };
  return (
    <div className="shopcart__cartitem">
      <CartItems />
      {productData.length === 0 ? null : (
        <div className="shopcart__cartitem__price-details">
          <div className="shopcart__cartitem__price-details__heading">
            <h3>PRICE DETAILS</h3>
          </div>
          <CartDivider />
          <div className="shopcart__cartitem__price-details__item">
            <p>Price({productData.length} items)</p>
            <p>${totalPrice}</p>
          </div>
          <div className="shopcart__cartitem__price-details__discount">
            <p>Discount</p>
            <p style={{ color: "green" }}>Free</p>
          </div>
          <DotDivider />
          <div className="shopcart__cartitem__price-details__total">
            <h4>Total Amount</h4>
            <h4>$ {totalPrice}</h4>
          </div>
          <button
            className="shopcart__cartitem__price-details__place-order"
            onClick={handleCheckout}
          >
            Place Order
          </button>
          {payNow && (
            <div className="shoopcart__payment__now">
              <StripeCheckout
                stripeKey="pk_test_51NGJcCSEQVa2bxN3SJ4CpVLawLgUZ2atGl97isevV0tfnXfomghBelC0OMptlhCOzsDBqsiaLMV5t2j0mz5yx6NF00D0EJutck"
                name="Shopcart Online Shopping"
                amount={totalPrice * 100}
                label="Pay to shopcart"
                description={`Your payment amount is $${totalPrice}`}
                token={payment}
                email={userInfo.email}
              />
            </div>
          )}
        </div>
      )}
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
}

export default CartItem;
