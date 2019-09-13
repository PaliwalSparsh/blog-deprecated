import React from "react";
import { config } from "../config/config.yml";

export default function Footer(props) {
  const { references } = props;
  return (
    <div className="referenceSection">
    
      <div className="referenceSection__heading">References</div>
      <div className="referenceSection__list">
        {references.map((reference, index) => {
          return (
            <div key={index} className="referenceSection__list__item">
              <span>{index + 1}.{" "}</span>
              <span>{reference.title}{" "}</span>
              <span><i>available at{" "}</i></span>
              <span><a href={reference.link}>{reference.link}</a></span>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .referenceSection {
          color: 'lightgrey';
          border-top: 2px solid ${config.css.primaryLightestColor};
          height: auto;
          display: flex;
          flex-wrap: wrap;
          margin-top: 20px;
          padding: 40px;
        }
        .referenceSection__heading {
          padding-top: 10px;
          padding-bottom: 5px;
          width: 50%;
          font-family: "EB Garamond", serif;
          font-size: 24px;
        }
        .referenceSection__list__item {
            padding-top: 5px;
        }
        .referenceSection__list__item span {
            font-size: 14px;
        }
        .referenceSection__list {
            padding-left: 10px;
        }

      `}</style>
    </div>
  );
}
