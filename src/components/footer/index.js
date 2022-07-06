import React from 'react'

import { Col, Row } from 'antd';

import FooterLogo from '../../assets/logo.png'

import './footerStyle.scss'

const FooterComponent = () => {
  return (
    <div className="footerContainer">
        <div className="myContainer">
            <Row>
                <Col span={6}>
                    <div className="footerbox">
                        <div className="footerLogo">
                            <img src={FooterLogo} 
                                alt="Logo"
                                width='100%'
                                height='100%'
                            />
                        </div>
                        <div className="footerIcon">
                            <div className="icon1">
                                icon1
                            </div>
                            <div className="icon2">
                                icon2
                            </div>
                        </div>

                    </div>
                </Col>
                 <Col span={6}>
                    col
                </Col>
                 <Col span={6}>
                    col
                </Col>
                 <Col span={6}>
                    col
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default FooterComponent