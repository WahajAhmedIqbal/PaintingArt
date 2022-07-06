import { Col, Row } from 'antd'
import React from 'react'
import { ButtonComponent } from '..'

import './aboutUsStyle.scss'


const AboutUsComponent = () => {
    return (
        <div className="aboutUsContainer">
            <div className="myContainer">
                <h1>
                    AboutUs
                </h1>
                <Row>
                    <Col span={12}>
                        <div className="aboutUsImage">
                            <img src="https://designprosusa.com/themes/PaintingArt/assets/images/aboutImage.png"
                                alt="AboutUs"
                                width='100%'
                                height='100%'
                            />
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="aboutUsContent">
                            <h2>
                                Welcome To Best Painting Shop
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, quis nostrud ut aliquip ex ea commodo consequat, Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                            </p>
                            <ButtonComponent buttonText='Read More' pageLink="../../containers/PageNotFound" />
                        </div>
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default AboutUsComponent