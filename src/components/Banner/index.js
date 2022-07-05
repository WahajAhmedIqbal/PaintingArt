import React from 'react'
// import { Row, Col } from 'antd'
import './bannerStyle.scss'
// import {  } from 'antd';
import { Col, Row, DatePicker, Space } from 'antd';

const BannerComponent = () => {

    return (

        <div className="bannerContainer">
            <div className="myContainer">
                <Row>
                    <Col span={10}>
                        <div className="bannerTextContainer">
                            <h3>
                                Painting is by
                            </h3>
                            <h5>
                                Nature a luminous
                            </h5>
                            <h3>
                                Language
                            </h3>
                            <button>
                                Contact Now
                            </button>
                        </div>
                    </Col>
                    <Col span={14}>
                        <div className="bannerImageContainer">
                            <div className="bannerSlid1">
                                <img src="https://designprosusa.com/themes/PaintingArt/assets/images/homeOne.png" 
                                    alt="Banner Image" 
                                    width='100%' 
                                    height='100%' 
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default BannerComponent