import React from "react";
import PostListing from "../components/PostListing";
import { config } from "../config/config.yml";

export const meta = {
  title: "Entries",
  tags: ["posts", "diary", "blog"],
  layout: "blog-post-list",
  publishDate: "2019-07-20",
  modifiedDate: false,
  seoDescription: "All my entries are listed here."
};

export default function Blog(props) {
  const blogPosts = props.allData.filter(content => content.type == "post");
  return (
    <div>
      <h1>{meta.title}</h1>
      <div className="blog-post-list">
        {blogPosts.map((post, index) => {
          return (
            <div className="postContainer">
              {post.unsplashPhotoId && (
                <div className="imageContainer">
                  <img
                    className="image"
                    src={`https://source.unsplash.com/${
                      post.unsplashPhotoId
                    }/300x300&fit=crop&auto=format`}
                  />
                </div>
              )}
              <PostListing key={index} post={post} indes={index} />
            </div>
          );
        })}
        <style jsx>{`
          .blog-post-list-title {
            width: 100%;
            text-align: center;
          }

          .postContainer {
            opacity: 0.6;
            background-color: ${config.css.primaryLightestColor};
            width: 300px;
            padding: 20px;
            margin-right: 30px;
            margin-bottom: 30px;
            box-shadow: 0 5px 15px hsla(0, 0%, 0%, 0.2);
            border-radius: 7px;
          }

          .postContainer:hover {
            opacity: 1;
            box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.2);
            transform: translate(1px, 1px);
          }

          .imageContainer {
            width: 300px;
            height: 200px;
          }

          .image {
            border-radius: 7px;
          }

          .blog-post-list {
            justify-content: center;
            margin: auto;
            display: flex;
            flex-wrap: wrap;
            max-width: 740px;
            align-items: center;
            padding: 40px 20px 100px 20px;
            position: relative;
          }
        `}</style>
      </div>
    </div>
  );
}
Blog.defaultProps = {
  allData: []
};
