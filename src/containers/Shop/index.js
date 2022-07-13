import React from "react";

import { Col, Row } from "antd";

import {
    NavBarComponent,
    BannerComponent,
    ShopCardInner,
    FooterComponent,
} from "../../components";

import "./shopStyle.scss";

const ShopContainer = () => {

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
    <div>
      <NavBarComponent />
      <BannerComponent
        bannerText=""
        bannerText2="Shop"
        bannerText3=""
        bannerSlide1="https://designprosusa.com/themes/PaintingArt/assets/images/shopHeaderOne.png"
        bannerSlide2="https://designprosusa.com/themes/PaintingArt/assets/images/shopHeaderTwo.png"
        bannerSlide3="https://designprosusa.com/themes/PaintingArt/assets/images/shopHeaderThree.png"
        bannerSlide4="https://designprosusa.com/themes/PaintingArt/assets/images/shopHeaderFour.png"
      />

      <div className="shopproduct">
        <div className="myContainer">
          <Row gutter={20}>
            {cardsDetails.map((item) => (
              <Col lg={6} md={6} sm={12} xs={24}>
                <ShopCardInner
                  image={item.image}
                  product_Name={item.product_Name}
                  product_Price={item.product_Price}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
};

export default ShopContainer;
