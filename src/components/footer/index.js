import React from "react";

import { Col, Row } from "antd";
import { FacebookFilled, InstagramOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import FooterLogo from "../../assets/logo.png";

import "./footerStyle.scss";

const FooterComponent = () => {
  return (
    <div className="footerContainer">
      <div className="myContainer">
        <Row>
          <Col span={6} lg={6} md={12} sm={24} xs={24}>
            <div className="footerbox">
              <div className="footerLogo">
                <Link to="/">
                  <img src={FooterLogo} alt="Logo" width="100%" height="100%" />
                </Link>
              </div>
              <div className="footerIcon">
                <div className="icon1">
                  <Link to="https://www.facebook.com/" target="_blank">
                    <FacebookFilled className="facebookIcon" />
                    {/* <FontAwesomeIcon className="icon" icon={faCoffee} /> */}
                  </Link>
                </div>
                <div className="icon2">
                  <Link to="" target="_blank">
                    <InstagramOutlined className="facebookIcon" />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col span={6} lg={6} md={12} sm={24} xs={24}>
            <div className="footerContent">
              <h5>Categories</h5>
              <p>
                <Link to="../../containers/PageNotFound">Abstracts</Link>
              </p>
              <p>
                <Link to="../../containers/PageNotFound">Pointillism</Link>
              </p>
              <p>
                <Link to="../../containers/PageNotFound">Public Art</Link>
              </p>
              <p>
                <Link to="../../containers/PageNotFound">Water Colors</Link>
              </p>
            </div>
          </Col>
          <Col span={6} lg={6} md={12} sm={24} xs={24}>
            <div className="footerContent">
              <h5>Information</h5>
              <p>
                <Link to="../../containers/PageNotFound">Artist Resume</Link>
              </p>
              <p>
                <Link to="../../containers/PageNotFound">Artist Statement</Link>
              </p>
              <p>
                <Link to="../../containers/PageNotFound">Contact Us</Link>
              </p>
            </div>
          </Col>
          <Col span={6} lg={6} md={12} sm={24} xs={24}>
            <div className="footerContent">
              <h5>Payment Method</h5>
              <div className="paymentbox">
                <div className="icon1">
                  <img
                    src="https://designprosusa.com/themes/PaintingArt/assets/images/visaIcon.png"
                    alt="VisaCard"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="icon2">
                  <img
                    src="https://designprosusa.com/themes/PaintingArt/assets/images/paypalIcon.png"
                    alt="Paypal"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FooterComponent;
