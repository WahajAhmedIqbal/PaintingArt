import React, { useEffect } from "react";

import { Col, Row } from "antd";

import { WOW } from "wowjs";

import "./bannerStyle.scss";

import { ButtonComponent } from "../";

// import BannerImageOne from ''

const BannerComponent = (props) => {
  useEffect(() => {
    new WOW().init();
  }, []);

  return (
    <div className="bannerContainer ">
      <Row className="bannerRow">
        <Col span={10} xl={10} lg={10} md={10} sm={20} xs={20}>
          <div className="bannerTextContainer">
            <h3>
              {props.bannerText}
              <span>{props.bannerText2}</span>
              {props.bannerText3}
            </h3>
            {props.buttonCheck ? (
              <ButtonComponent pageLink="/ContactUs" buttonText="Contact Now" />
            ) : (
              ""
            )}
          </div>
        </Col>
        <Col span={14} xl={14} lg={14} md={14} sm={4} xs={4}>
          <div className="bannerImageContainer">
            <div
              className="bannerSlid1 wow fadeInRight"
              data-wow-duration="5s"
              data-wow-delay="1s"
            >
              <img
                src={props.bannerSlide1}
                alt="BannerImage"
                width="100%"
                height="100%"
              />
            </div>
            <div className="bannerSlid2">
              <img
                src={props.bannerSlide2}
                alt="BannerImage"
                width="100%"
                height="100%"
              />
            </div>
            <div className="bannerSlid3">
              <img
                src={props.bannerSlide3}
                alt="BannerImage"
                width="100%"
                height="100%"
              />
            </div>
            <div className="bannerSlid4">
              <img
                src={props.bannerSlide4}
                alt="BannerImage"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BannerComponent;
