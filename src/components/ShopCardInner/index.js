import React from "react";

import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";

import "./shopCardInnerStyle.scss";

const ShopCardInner = (porps) => {
  return (
    <div className="shopCardContainer">
      <div className="cardImage">
        <Link to="/Shop/product">
          <img
            src={porps.image}
            alt="ProductImage"
            width="100%"
            height="100%"
          />
        </Link>
      </div>
      <div className="cardContent">
        <div className="productName">
          <h4>{porps.product_Name}</h4>
        </div>
        <div className="productPrice">
          <p>${porps.product_Price}</p>
          <div className="cardIcon">
            <div className="icon1">
              <Link to="../../containers/PageNotFound">
                <ShoppingCartOutlined className="shopingCart" />
              </Link>
            </div>
            <div className="icon2">
              <Link to="../../containers/PageNotFound">
                <HeartOutlined className="shopingCart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCardInner;
