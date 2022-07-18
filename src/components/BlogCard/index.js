import React from "react";
import { Link } from "react-router-dom";

import { ButtonComponent } from "../";

import "./blogCardStyle.scss";

const BlogCardComponent = (props) => {

  return (
    <div className="bloggCard">
      <div className="blogCardIamge">
        <Link to={props.blog_details_link}>
          <img src={props.image} alt="blogImage" width="100%" height="100%" />
        </Link>
      </div>
      <div className="blogContent">
        <h3>{props.blog_Name}</h3>
        <h5>{props.blog_date}</h5>
        <p>{props.blog_blog}</p>
        <ButtonComponent
          pageLink={props.blog_details_link}
          buttonText="Read More"
        />
      </div>
    </div>
  );
};

export default BlogCardComponent;
