import React from 'react'

import { Col, Row } from 'antd';

import './CategoriesStyle.scss'

const CategoriesCompoenet = () => {
    return (
        <div className="CategoriesContainer">
            <div className="myContainer">
                <h1>
                    Categories
                </h1>
                <Row>
                    <Col span={16}>
                        <div className="categoryBigImage">
                            <img src='https://designprosusa.com/themes/PaintingArt/assets/images/categoriesOne.png'
                                alt="Category1"
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="categoryBigImage2">
                            <img src='https://designprosusa.com/themes/PaintingArt/assets/images/categoriesTwo.png' 
                                alt="Category2"
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </Col>
                </Row>
                 <Row>
                    <Col span={8}>
                        <div className="categoryBigImage2">
                            <img src='https://designprosusa.com/themes/PaintingArt/assets/images/categoriesThree.png'
                                alt="Category1"
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </Col>
                    <Col span={16}>
                        <div className="categoryBigImage">
                            <img src='https://designprosusa.com/themes/PaintingArt/assets/images/categoriesFour.png' 
                                alt="Category2"
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default CategoriesCompoenet