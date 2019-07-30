import React from "react";
import { config } from "../config/config.yml";
import * as gtag from "../utils/gtag";

const BLOG_BASE_URL = "blog.paliwalsparsh.now.sh";

const gaForDiscussionLink = (fullUrlPath) => {
  gtag.event({
    action: "discussion_link",
    category: "widgets",
    label: fullUrlPath
  });
};

export default function DiscussionLink(props) {
  const twitterDiscussionUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${BLOG_BASE_URL}${props.fullUrlPath}`
  )}`;
  return (
    <div className="discussionLinkContainer">
      <a
        onClick={() => {
          gaForDiscussionLink(props.fullUrlPath);
        }}
        href={twitterDiscussionUrl}
        className="discussionLinkContainer__link"
        target="_blank"
      >
        Discuss on Twitter
      </a>
      <style jsx>{`
        .discussionLinkContainer {
          padding-top: 20px;
        }
        .discussionLinkContainer__link {
          color: ${config.css.primaryColor};
          font-size: 20px;
          font-family: "EB Garamond", serif;
        }
        .discussionLinkContainer__link:hover {
          color: ${config.css.primaryColor};
          text-decoration: none;
        }
        .discussionLinkContainer__link:visited {
          color: ${config.css.primaryColor};
        }
      `}</style>
    </div>
  );
}
