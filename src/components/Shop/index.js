import React from 'react'

import { Row, Col } from 'antd'

import { ButtonComponent } from '../'

import './shopStyle.scss'
import ShopCardInner from '../ShopCardInner';

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
            <Col span={6} xl={6} lg={6} md={7} sm={12} xs={24} key={item.id}>
              <ShopCardInner 
                image={item.image} 
                product_Name={item.product_Name} 
                product_Price={item.product_Price}
              />
            </Col>
          ))}
        </Row>
        <div className="showNowButton">
          <ButtonComponent
            pageLink="/Shop"
            buttonText="Shop Now"
          />
        </div>
      </div>
    </div>
  );
}

export default ShopCompoenent