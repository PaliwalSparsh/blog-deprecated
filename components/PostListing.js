import React from "react";
import Link from "next/link";
import TagBlock from "./Tags";

export default function PostListing(props) {
  const { post, index } = props;
  return (
    <React.Fragment key={`post-list-${index}`}>
      <h2 className="postTitle" key={`${post.name}-headline`}>
        <Link prefetch href={`/blog/${post.name}`}>
          <a>{post.title}</a>
        </Link>
      </h2>
      <TagBlock tags={post.tags} />
      <style jsx>{`
        .postTitle {
          height: 62px;
        }
      `}</style>
    </React.Fragment>
  );
}
