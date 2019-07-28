import React from "react";
import NavButton from "../NavButton";
import blogButtonPng from "../../static/images/blog_button.png";

export default ({ children }) => (
  <div className="blog-layout">
    {children}
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
