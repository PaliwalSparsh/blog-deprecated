import React from "react";
import { config } from "../config/config.yml";

export default function FlipImg(props) {
  const isImageFlippable = props.message !== undefined;
  const flipProperty = isImageFlippable ? `transform: rotateY(180deg)` : ``;
  return (
    <div className="mainContainer">
      <div className="theCard">
        <div className="theFront">
          <img className="image" src={props.imageUrl} />
        </div>
        <div className="theBack">
          {props.message}
        </div>
      </div>
      <style jsx>{`
        /* THE MAINCONTAINER HOLDS EVERYTHING */
        .mainContainer {
          width: 100%;
          height: 400px;
          background: none;
        }

        .image {
          backface-visibility: hidden;
        }

        /* THE CARD HOLDS THE FRONT AND BACK FACES */
        .theCard {
          position: relative;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 10px;
          transform-style: preserve-3d;
          transition: all 0.8s ease;
        }

        /* THE PSUEDO CLASS CONTROLS THE FLIP ON MOUSEOVER AND MOUSEOUT */
        .theCard:hover {
          ${flipProperty}
        }

        /* THE FRONT FACE OF THE CARD, WHICH SHOWS BY DEFAULT */
        .theFront {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 10px;
          backface-visibility: hidden;
          overflow: hidden;
          background: ${config.css.primaryLightestColor};
          color: #000;
        }

        /* THE BACK FACE OF THE CARD, WHICH SHOWS ON MOUSEOVER */
        .theBack {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          font-size: 24px;
          font-family: 'Shadows Into Light', cursive;

          border-radius: 10px;
          backface-visibility: hidden;
          overflow: hidden;
          background: #fafafa;
          color: #333;
          text-align: center;
          transform: rotateY(180deg);
        }

        @media screen and (min-width: 200px) {
          .mainContainer {
            height: 150px;
          }
          .image {
            transform: translate(0px, -40px);
          }
        }

        @media screen and (min-width: 600px) {
          .mainContainer {
            height: 300px;
          }
          .image {
            transform: translate(0px, -80px);
          }
        }

        @media screen and (min-width: 768px) {
          .mainContainer {
            height: 400px;
          }
          .image {
            transform: translate(0px, 0px);
          }        
        }
      `}</style>
    </div>
  );
}
