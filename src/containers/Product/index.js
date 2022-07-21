import React, { useState } from "react";

import { Col, Row } from "antd";

import Select from "react-select";

import {
  NavBarComponent,
  FooterComponent,
  ButtonComponent,
} from "../../components";

import "./productStyle.scss";

const ProductContainer = () => {
  const [selectedOption, setSelectedOption] = useState();

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div>
      <NavBarComponent />

      <div className="productsContainer">
        <div className="myContainer">
          <Row gutter={15}>
            <Col lg={14} sm={14} xs={24}>
              <div className="productIamge">
                <img
                  src="https://designprosusa.com/themes/PaintingArt/assets/images/productImage.png"
                  alt="product"
                  width="100%"
                  height="100%"
                />
              </div>
            </Col>
            <Col lg={10} sm={10} xs={24}>
              <div className="productDes">
                <h3>Sleep Women With Water Color</h3>
                <h6>$25.00</h6>
                <div className="productSize">
                  <label htmlFor="">Size :</label>
                  <Select
                    defaultInputValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                  />
                </div>
                <div className="productConter">
                  <div className="productMinus">
                    <label htmlFor="">-</label>
                  </div>
                  <div className="productCount">
                    <input type="text" />
                  </div>
                  <div className="productPlus">
                    <label htmlFor="">+</label>
                  </div>
                </div>
                <ButtonComponent pageLink="" buttonText="Add To Cart" />

                <h3>Descriptions</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam,
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
};

export default ProductContainer;
