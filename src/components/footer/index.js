import React from "react";

import { Col, Row } from "antd";
import { Link } from "react-router-dom";

import FooterLogo from "../../assets/logo.png";

import "./footerStyle.scss";

const FooterComponent = () => {
  return (
    <div className="footerContainer">
      <div className="myContainer">
        <Row>
          <Col span={6}>
            <div className="footerbox">
              <div className="footerLogo">
                <Link to="/">
                  <img src={FooterLogo} alt="Logo" width="100%" height="100%" />
                </Link>
              </div>
              <div className="footerIcon">
                <div className="icon1">icon1</div>
                <div className="icon2">icon2</div>
              </div>
            </div>
          </Col>
          <Col span={6}>
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
          <Col span={6}>
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
          <Col span={6}>
            <div className="footerContent">
              <h5>Payment Method</h5>
              <div className="paymentbox">
                <div className="icon1">
                    Icon
                </div>
                <div className="icon2">
                    Icon
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
