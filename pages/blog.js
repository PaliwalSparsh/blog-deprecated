import React from "react";
import PostListing from "../components/PostListing";

export const meta = {
    title: "Entries",
    tags: ["posts", "diary", "blog"],
    layout: "blog-post-list",
    publishDate: "2019-07-20",
    modifiedDate: false,
    seoDescription:
        "All my entries are listed here."
};

export default function Blog(props) {
    const blogPosts = props.allData.filter(content => content.type == "post");
    return (
        <div className="blog-post-list">
            <h1>{meta.title}</h1>
            {blogPosts.map((post, index) => (
                <PostListing key={index} post={post} indes={index} />
            ))}
        </div>
    );
}
Blog.defaultProps = {
    allData: []
};
