import { Row, Col } from 'antd'
import React from 'react'
import './bannerStyle.scss'

const BannerComponent = () => {
    return (
        <div className="bannerContainer">
            <div className="myContainer">
                <Row>
                    <Col span={9}>
                        <h1>
                            tst col 9
                        </h1>
                    </Col>
                    <Col span={14}>
                        <h1>
                            tst col 15
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>col-12</Col>
                    <Col span={12}>col-12</Col>
                </Row>
            </div>
        </div>
    )
}

export default BannerComponent