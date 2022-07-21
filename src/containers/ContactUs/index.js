import React, { useEffect } from "react";

import {
  NavBarComponent,
  BannerComponent,
  FooterComponent,
  ButtonComponent,
} from "../../components";

import "./ContactUsStyle.scss";

const ContactUsContainer = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <div>
      <NavBarComponent />
      <BannerComponent
        bannerText=""
        bannerText2="Contact Us"
        bannerText3=""
        bannerSlide1="https://designprosusa.com/themes/PaintingArt/assets/images/contactOne.png"
        bannerSlide2="https://designprosusa.com/themes/PaintingArt/assets/images/contactTwo.png"
        bannerSlide3="https://designprosusa.com/themes/PaintingArt/assets/images/contactThree.png"
        bannerSlide4="https://designprosusa.com/themes/PaintingArt/assets/images/contactFour.png"
      />

      <div className="myContainer">
        <div className="getInTouch">
          <h3>Get in Touch</h3>
          <div className="inTouchInput">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Addresss" name="" id="" />
            <input type="tel" placeholder="Phone No" name="" id="" />
            <textarea
              name=""
              id=""
              placeholder="Message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <ButtonComponent pageLink="../Home" buttonText="Submit" />
        </div>
      </div>

      <FooterComponent />
    </div>
  );
};

export default ContactUsContainer;
