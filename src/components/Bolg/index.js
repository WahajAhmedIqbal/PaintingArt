import React from "react";

import { Row, Col } from "antd";

import { ButtonComponent, BlogCardComponent } from "../";

import "./blogStyle.scss";

const BlogComponent = () => {
  const blogCardsDetails = [
    {
      id: 1,
      image:
        "https://designprosusa.com/themes/PaintingArt/assets/images/blogOne.png",
      blog_Name: "blog",
      blog_date: "9/4/40",
      blog_blog:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
    },
    {
      id: 2,
      image:
        "https://designprosusa.com/themes/PaintingArt/assets/images/blogTwo.png",
      blog_Name: "blog 3",
      blog_date: "29/5/40",
      blog_blog:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
    },
    {
      id: 3,
      image:
        "https://designprosusa.com/themes/PaintingArt/assets/images/blogThree.png",
      blog_Name: "blog 2",
      blog_date: "1/1/20",
      blog_blog:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
    },
  ];

  return (
    <div className="blogContainer">
      <div className="blogBgContainer">
        <img
          className=""
          src="https://designprosusa.com/themes/PaintingArt/assets/images/blogCover.png"
          alt="bgImage"
          width="100%"
          height="100%"
        />
      </div>
      <div className="myContainer">
        <div className="blogHeading">
          <h1>Blog</h1>
        </div>
        <div className="blogCardsContainer">
          <Row gutter={20}>
            {blogCardsDetails.map((blog) => (
              <Col span={8} xl={8} lg={8} md={12} sm={12} xs={24} key={blog.id}>
                <BlogCardComponent
                  image={blog.image}
                  blog_Name={blog.blog_Name}
                  blog_date={blog.blog_date}
                  blog_blog={blog.blog_blog}
                  blog_details_link='/blog/blogDetails'
                />
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
};

export default BlogComponent;
