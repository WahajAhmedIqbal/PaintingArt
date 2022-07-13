import { Col, Row } from "antd";
import React from "react";
import {
  NavBarComponent,
  BannerComponent,
  FooterComponent,
} from "../../components";
import "./aboutUsStyle.scss";

const AboutUsContainer = () => {
  return (
    <div>
      <NavBarComponent />
      <BannerComponent
        bannerText=""
        bannerText2="About Us"
        bannerText3=""
        bannerSlide1="https://designprosusa.com/themes/PaintingArt/assets/images/aboutOne.png"
        bannerSlide2="https://designprosusa.com/themes/PaintingArt/assets/images/aboutTwo.png"
        bannerSlide3="https://designprosusa.com/themes/PaintingArt/assets/images/aboutThree.png"
        bannerSlide4="https://designprosusa.com/themes/PaintingArt/assets/images/aboutFour.png"
      />

      <section>
        <div className="myContainer">
          <div className="aboutUsSection">
            <Row gutter={20}>
              <Col md={12} sm={12} xs={24}>
                <div className="abtUsImage">
                  <img
                    src="https://designprosusa.com/themes/PaintingArt/assets/images/aboutImage.png"
                    alt="AboutUs"
                    width="100%"
                    height="100%"
                  />
                </div>
              </Col>
              <Col md={12} sm={12} xs={24}>
                <div className="aboutUstxtCon">
                  <h3>Welcome To Best Painting Shop</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi. Lorem ipsum dolor sit amet, quis nostrud ut
                    aliquip ex ea commodo consequat, Duis autem vel eum iriure
                    dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </Col>
            </Row>
            <div className="abttext">
              <h3>Who We Are?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
                dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy
                nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterComponent />
    </div>
  );
};

export default AboutUsContainer;
