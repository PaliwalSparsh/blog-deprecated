import React from "react";
import NavButton from "../NavButton";
import blogButtonPng from "../../static/images/blog_button.png";
import DiscussionLink from "../DiscussionLink";
import ReferenceSection from "../ReferencesSection";
import QuickNotes from "../QuickNotes";

export default ({ children }) => {
  const postData = children && children.props.postData;

  const { fullUrlPath, references } = postData;
  // by default show discussion link
  const showDiscussionLink =
    postData.showDiscussionLink === false ? false : true;
  return (
    <div className="blog-layout">
      <QuickNotes />
      {children}
      {showDiscussionLink && <DiscussionLink fullUrlPath={fullUrlPath} />}
      {references && <ReferenceSection references={references} />}
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
};
