import React, { useEffect } from "react";

import { Col, Row } from "antd";

import {
  NavBarComponent,
  BannerComponent,
  BlogCardComponent,
  FooterComponent,
} from "../../components";

import "./blogStyle.scss";

const BlogContainer = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
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
    <div>
      <NavBarComponent />
      <BannerComponent
        bannerText=""
        bannerText2="Blogs"
        bannerText3=""
        bannerSlide1="https://designprosusa.com/themes/PaintingArt/assets/images/blogsOne.png"
        bannerSlide2="https://designprosusa.com/themes/PaintingArt/assets/images/blogsTwo.png"
        bannerSlide3="https://designprosusa.com/themes/PaintingArt/assets/images/blogsThree.png"
        bannerSlide4="https://designprosusa.com/themes/PaintingArt/assets/images/blogsFour.png"
      />

      <div className="blogContainers">
        <div className="myContainer">
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
      </div>

      <FooterComponent />
    </div>
  );
};

export default BlogContainer;
