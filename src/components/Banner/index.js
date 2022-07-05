import React from 'react'

import { Col, Row } from 'antd';


import './bannerStyle.scss'

import {
    ButtonComponent
} from '../'

// import BannerImageOne from ''

const BannerComponent = () => {


    return (
        <div className="bannerContainer ">
            <Row className='bannerRow'>
                <Col span={10}>
                    <div className="bannerTextContainer">
                        <h3>
                            Painting is by
                            <h5>
                                Nature a luminous
                            </h5>
                            Language
                        </h3>

                        <ButtonComponent pageLink="../../containers/PageNotFound" buttonText="Contact Now" />
                    </div>
                </Col>
                <Col span={14}>
                    <div className="bannerImageContainer">
                        <div className="bannerSlid1">
                            <img src='https://designprosusa.com/themes/PaintingArt/assets/images/homeOne.png'
                                alt="BannerImage"
                                width='100%'
                                height='100%'
                            />
                        </div>
                        <div className="bannerSlid2">
                            <img src='https://designprosusa.com/themes/PaintingArt/assets/images/homeTwo.png'
                                alt="BannerImage"
                                width='100%'
                                height='100%'
                            />
                        </div>
                        <div className="bannerSlid3">
                            <img src='https://designprosusa.com/themes/PaintingArt/assets/images/homeThree.png'
                                alt="BannerImage"
                                width='100%'
                                height='100%'
                            />
                        </div>
                        <div className="bannerSlid4">
                            <img src='https://designprosusa.com/themes/PaintingArt/assets/images/homeFour.png'
                                alt="BannerImage"
                                width='100%'
                                height='100%'
                            />
                        </div>

                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default BannerComponent