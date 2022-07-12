import React from "react";

import { Col, Row } from "antd";

import {
    NavBarComponent,
    BannerComponent,
    FooterComponent,
} from "../../components";
import "./shopStyle.scss";

const ShopContainer = () => {
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

      
      <FooterComponent />
    </div>
  );
};

export default ShopContainer;
