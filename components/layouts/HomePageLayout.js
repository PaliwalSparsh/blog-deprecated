import React from "react";
import NavButton from "../NavButton";
import HomeScreenAsset from "../../static/images/home_screen_asset.png";
import blogButtonPng from "../../static/images/blog_button.png";
import aboutButtonPng from "../../static/images/about_button.png";

export default function HomePageLayout() {
  return (
    <div className="homeScreenLayout">
      <div className="homeScreenAssetContainer">
        <img
          className="homeScreenAssetContainer__image"
          src={HomeScreenAsset}
        />
      </div>
      <div className="navigationButtonContainer">
        <NavButton
          src={blogButtonPng}
          link="/blog"
        />
        <NavButton
          src={aboutButtonPng}
          link="/about"
        />
      </div>
      <style jsx>{`
        .home-page-layout {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
        .navigationButtonContainer {
            padding-top: 50px;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        .homeScreenAssetContainer {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            width: 100%;
        }
        .homeScreenAssetContainer__image {
          max-width: 500px;
          animation: beat 3.33s infinite alternate;
          transform-origin: center;
        }
        @media screen and (max-width: 425px) {
          .homeScreenAssetContainer__image {
            max-width: 300px;
          }
        }
        @keyframes beat{
            to { transform: scale(0.9); }
        }
      `}</style>
    </div>
  );
}
