import React from "react";
import NavButton from "../NavButton";
import blogButtonPng from "../../static/images/blog_button.png";
import DiscussionLink from "../DiscussionLink";

export default ({ children }) => {
  const postData = children && children.props.postData;
  
  // by default show discussion link
  const showDiscussionLink = postData.showDiscussionLink === false ? false : true;
  return (
    <div className="blog-layout">
      {children}
      { showDiscussionLink && <DiscussionLink fullUrlPath={postData.fullUrlPath} /> }
      <div className="navigationButtonContainer">
        <NavButton
          className="navigationButtonContainer__button"
          src={blogButtonPng}
          link="/blog"
        />
      </div>
      <style jsx>{`
        .blog-layout {
          margin: auto;
        }
  
        .navigationButtonContainer {
          padding-top: 50px;
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
        }
      `}</style>
    </div>
  );
} 
