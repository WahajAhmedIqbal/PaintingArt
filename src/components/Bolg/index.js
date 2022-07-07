import React from 'react'

import { Row, Col } from 'antd'

import { ButtonComponent } from '../'

import './blogStyle.scss'

const BlogComponent = () => {

  const blogCardsDetails = [
    {
      id: 1,
      image: "https://designprosusa.com/themes/PaintingArt/assets/images/blogOne.png",
      blog_Name: "blog",
      blog_date: "9/4/40",
      blog_blog:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
    },
    {
      id: 2,
      image: "https://designprosusa.com/themes/PaintingArt/assets/images/blogTwo.png",
      blog_Name: "blog 3",
      blog_date: "29/5/40",
      blog_blog:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
    },
    {
      id: 3,
      image: "https://designprosusa.com/themes/PaintingArt/assets/images/blogThree.png",
      blog_Name: "blog 2",
      blog_date: "1/1/20",
      blog_blog:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
    },
  ];

  return (
    <div className="blogContainer">
      <img
        className='bgimageblog'
        src="https://designprosusa.com/themes/PaintingArt/assets/images/blogCover.png"
        alt="bgImage"
        width='100%'
        height='100%'
      />
      <div className="myContainer">
        <div className="blogHeading">
          <h1>Blog</h1>
        </div>
        <div className="blogCardsContainer">
          <Row gutter={16}>
            {blogCardsDetails.map((blog) => (
              <Col span={8}>
                <div className="blogCard">
                  <div className="bolgCardImage">
                    <img
                      src={blog.image}
                      alt="ProductImage"
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <div className="blogCardContent">
                    <h3>{blog.blog_Name}</h3>
                    <h5>{blog.blog_date}</h5>
                    <p>{blog.blog_blog}</p>
                    <ButtonComponent
                      pageLink="../../containers/PageNotFound"
                      buttonText="Read More"
                    />
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <div className="blogLoadMore">
          <ButtonComponent
            pageLink="../../containers/PageNotFound"
            buttonText="Load More"
          />
        </div>
      </div>
    </div>
  );
}

export default BlogComponent