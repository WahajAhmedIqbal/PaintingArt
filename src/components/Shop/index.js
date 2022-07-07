import React from 'react'

import { Row, Col } from 'antd'
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import { Link } from 'react-router-dom'

import { ButtonComponent } from '../'

import './shopStyle.scss'

const ShopCompoenent = () => {

  const cardsDetails = [
    {
      id: 1,
      image:
        "https://designprosusa.com/themes/PaintingArt/assets/images/shopOne.png",
      product_Name: "Gril Painting",
      product_Price: "215",
    },
    {
      id: 2,
      image:
        "https://designprosusa.com/themes/PaintingArt/assets/images/shopTwo.png",
      product_Name: "Product 2",
      product_Price: "205",
    },
    {
      id: 3,
      image:
        "https://designprosusa.com/themes/PaintingArt/assets/images/shopThree.png",
      product_Name: "Classic Painting",
      product_Price: "555",
    },
    {
      id: 4,
      image:
        "https://designprosusa.com/themes/PaintingArt/assets/images/shopFour.png",
      product_Name: "Painting",
      product_Price: "300",
    },
  ];

  return (
    <div className="shopContainer">
      <div className="myContainer">
        <h3>Shop</h3>
        <Row gutter={16}>
          {cardsDetails.map((item) => (
            <Col span={6} key={item.id}>
              <div className="shopCardContainer">
                <div className="cardImage">
                  <Link to="../../containers/PageNotFound">
                    <img
                      src={item.image}
                      alt="ProductImage"
                      width="100%"
                      height="100%"
                    />
                  </Link>
                </div>
                <div className="cardContent">
                  <div className="productName">
                    <h4>{item.product_Name}</h4>
                  </div>
                  <div className="productPrice">
                    <p>{item.product_Price}</p>
                    <div className="cardIcon">
                      <div className="icon1">
                        <Link to="../../containers/PageNotFound">
                          <ShoppingCartOutlined />
                        </Link>
                      </div>
                      <div className="icon2">
                        <Link to="../../containers/PageNotFound">
                          <HeartOutlined />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className="showNowButton">
          <ButtonComponent
            pageLink="../../containers/PageNotFound"
            buttonText="Shop Now"
          />
        </div>
      </div>
    </div>
  );
}

export default ShopCompoenent