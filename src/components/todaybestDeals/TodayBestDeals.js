import React, { useState } from "react";
import "./todaybestdeals.css";
import Men from "./Men";
import Women from "./Women";
import Electronic from "./Electronic";
import Jwellery from "./Jwellery";

const TodayBestDeals = ({ products }) => {
  const [mensProduct, setMensProduct] = useState([]);
  const [womensProduct, setWomensProduct] = useState([]);
  const [electronicProduct, setElectronicProduct] = useState([]);
  const [jwelleryProduct, setJwelleryProduct] = useState([]);

  const mensSection = () => {
    setWomensProduct([]);
    setElectronicProduct([]);
    setJwelleryProduct([]);
    setMensProduct(
      products.filter((value) => {
        return value.category === "men's clothing";
      })
    );
  };

  const womensSection = () => {
    setMensProduct([]);
    setElectronicProduct([]);
    setJwelleryProduct([]);
    setWomensProduct(
      products.filter((value) => {
        return value.category === "women's clothing";
      })
    );
  };

  const electronicSection = () => {
    setMensProduct([]);
    setWomensProduct([]);
    setJwelleryProduct([]);
    setElectronicProduct(
      products.filter((value) => {
        return value.category === "electronics";
      })
    );
  };

  const jwellerySection = () => {
    setMensProduct([]);
    setElectronicProduct([]);
    setWomensProduct([]);
    setJwelleryProduct(
      products.filter((value) => {
        return value.category === "jewelery";
      })
    );
  };
  return (
    <div className="shopcart__todaybestdeals">
      <div className="shopcart__todaybestdeals__heading">
        <h1>Today's Best Deals For You!</h1>
      </div>
      <div className="shopcart__todaybestdeals__navbar">
        <div className="shopcart__todaybestdeals__navbar__item">
          <button
            onClick={mensSection}
            style={{
              backgroundColor:
                mensProduct.length > 0 ? "rgb(174, 254, 174)" : "white",
              border: mensProduct.length > 0 ? "none" : "",
            }}
          >
            Men
          </button>
          <button
            onClick={womensSection}
            style={{
              backgroundColor:
                womensProduct.length > 0 ? "rgb(174, 254, 174)" : "white",
              border: womensProduct.length > 0 ? "none" : "",
            }}
          >
            Women
          </button>
          <button
            onClick={electronicSection}
            style={{
              backgroundColor:
                electronicProduct.length > 0 ? "rgb(174, 254, 174)" : "white",
              border: electronicProduct.length > 0 ? "none" : "",
            }}
          >
            Electronic
          </button>
          <button
            onClick={jwellerySection}
            style={{
              backgroundColor:
                jwelleryProduct.length > 0 ? "rgb(174, 254, 174)" : "white",
              border: jwelleryProduct.length > 0 ? "none" : "",
            }}
          >
            Jwellery
          </button>
        </div>
      </div>

      <div className="shopcart__todaybestdeals__sections">
        <Men mensProduct={mensProduct} />
        <Women womensProduct={womensProduct} />
        <Electronic electronicProduct={electronicProduct} />
        <Jwellery jwelleryProduct={jwelleryProduct} />
      </div>
    </div>
  );
};

export default TodayBestDeals;
