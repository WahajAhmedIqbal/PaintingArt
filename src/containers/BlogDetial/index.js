import React from "react";

import { Col, Row } from "antd";

import {
    NavBarComponent,
    BannerComponent,
    BlogCardComponent,
    FooterComponent,
} from "../../components";

import "./blogDetial.scss";

const BlogDetailsContainer = () => {
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
        <div>
            <NavBarComponent />

            <div className="myContainer">
                <div className="blogDetialsCard">
                    <div className="detailiBlogimg">
                        <img
                            src='https://designprosusa.com/themes/PaintingArt/assets/images/blogsInnerImage.jpg'
                            alt="Banner"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="blogDetails">
                        <h3>
                            Blog 1
                        </h3>
                        <h6>
                            March 05, 2022
                        </h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        </p>

                    </div>
                </div>
            </div>

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

export default BlogDetailsContainer;
