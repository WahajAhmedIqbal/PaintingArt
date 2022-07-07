import React from "react";

import "./SubcribeStyle.scss";

import { ButtonComponent } from '../'

const SubcribeComponent = () => {
  return (
    <div className="SubcribeContainer">
      <div className="myContainer">
        <h4>
          Subcribe To <span>Our Newsletter</span>
        </h4>
        <div className="subsEmail">
            <input type="text" placeholder="Email Address" />
        </div>
        <div className="subcButon">
            <ButtonComponent pageLink="../../containers/PageNotFound" buttonText='Subscribe' />
        </div>
      </div>
    </div>
  );
};

export default SubcribeComponent;
