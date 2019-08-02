import React, { Component } from "react";
import TagBlock from "../components/Tags";
import ReadingProgress from "../components/ReadingProgress";
import { articleSEO } from "../utils/seo";
import { formatDisplayDate } from "../utils/formatters";

export default class BlogMeta extends Component {
  renderProgressBar = postData => {
    return postData.hideProgressBar ? null : <ReadingProgress />;
  };

  render() {
    const { postData } = this.props.data;
    const { formattedPublishDate, title, unsplashPhotoId, tags } = postData;
    const imageUrl = `https://source.unsplash.com/${unsplashPhotoId}/1600x900`
    return (
      <React.Fragment>
        {this.renderProgressBar(postData)}
        <h1>{title}</h1>
        <small className="post-date">
          {formatDisplayDate(formattedPublishDate)}
        </small>
        <TagBlock tags={tags} />
        {articleSEO(postData)}
        {unsplashPhotoId && <div className="imageContainer"><img className="image" src={imageUrl}/></div>}
        <style jsx>{`
            .imageContainer {
                padding: 40px 0px 20px 0px;
            }
        `}</style>
      </React.Fragment>
    );
  }
}
