import React, { useState } from "react";
import "./navbar.css";
import shopcart from "../../assets/shopcart.svg";
import user from "../../assets/user.svg";
import shopping_cart from "../../assets/shopping_cart.svg";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";
import heart from "../../assets/redheart.svg";
import notification from "../../assets/notification.svg";
import coins from "../../assets/Dollar Coin.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { clearUser } from "../../redux/cart/cartSlice";
import { ToastContainer, toast } from "react-toastify";

const Menu = ({ scrollToSection, sectionRef1, sectionRef2, sectionRef3 }) => {
  return (
    <>
      <p onClick={() => scrollToSection(sectionRef1)}>Categories</p>
      <p onClick={() => scrollToSection(sectionRef2)}>Deals</p>
      <p onClick={() => scrollToSection(sectionRef3)}>What's New</p>
    </>
  );
};
const AcntDivider = () => {
  return <div className="acntDivder"></div>;
};

const CartMenu = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.shopcart.productData);
  const userInfo = useSelector((state) => state.shopcart.userInfo);
  const [toggleAccount, setToggleAccount] = useState(false);

  const handleGoggleLogout = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        dispatch(clearUser());
        toast.success(`Logout successfully`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navigate = useNavigate();

  const navigateToWishlistPage = () => {
    navigate("/wishlist");
  };

  return (
    <>
      <div
        className="navbar__account"
        onClick={() => setToggleAccount(!toggleAccount)}
      >
        {userInfo === null ? (
          <img src={user} alt="user-logo" />
        ) : (
          <img src={userInfo.image} alt="user-logo" className="user-avatar" />
        )}
        <p>Account</p>
        {userInfo && toggleAccount && (
          <div className="navbar__account__popupmenu">
            <div className="navbar__account__popupmenu-user">
              <img
                src={userInfo.image}
                alt="userImage"
                width="50px"
                height="50px"
                style={{ borderRadius: "50%" }}
              />
              <p>{userInfo.name}</p>
            </div>
            <AcntDivider />
            <div className="navbar__account__popupmenu-user-account-detail-lists">
              <ul>
                <li>
                  <img src={coins} alt="coins" />
                  <p>SuperCoins</p>
                </li>
                <li onClick={navigateToWishlistPage}>
                  <img src={heart} alt="heart" />
                  <p>Wishlist</p>
                </li>
                <li>
                  <img src={notification} alt="notification" />
                  <p>Notifications</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <Link to="/cart">
        <div className="navbar__cart">
          <div className="navbar__cart-logo">
            <img src={shopping_cart} alt="cart" />
            <p className="cart-badge">{productData.length}</p>
          </div>
          <p>Cart</p>
        </div>
      </Link>

      <div className="navbar__signIn__signOut">
        {userInfo === null ? (
          <Link to="/login">
            <button>Sign In</button>
          </Link>
        ) : (
          <button onClick={handleGoggleLogout}>Sign Out</button>
        )}
      </div>
    </>
  );
};

const Navbar = ({ scrollToSection, sectionRef1, sectionRef2, sectionRef3 }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="shopcart__navbar">
      <div className="shopcart__navbar-leftpart">
        <div className="navbar__logo">
          <img src={shopcart} alt="logo" />
          <h1>Shopcart</h1>
        </div>
      </div>

      <div className="shopcart__navbar-middlepart">
        <div className="navbar__links">
          <Menu
            scrollToSection={(sectionRef) => scrollToSection(sectionRef)}
            sectionRef1={sectionRef1}
            sectionRef2={sectionRef2}
            sectionRef3={sectionRef3}
          />
        </div>
      </div>
      <div className="shopcart__navbar-rightpart">
        <CartMenu />
      </div>

      <div className="navbar__menu">
        {toggleMenu ? (
          <img
            src={close}
            alt="cut-icon"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <img src={menu} alt="menu-icon" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="navbar__menu-container">
            <Menu
              scrollToSection={(sectionRef) => scrollToSection(sectionRef)}
              sectionRef1={sectionRef1}
              sectionRef2={sectionRef2}
              sectionRef3={sectionRef3}
            />
            <CartMenu />
          </div>
        )}
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

export default Navbar;
