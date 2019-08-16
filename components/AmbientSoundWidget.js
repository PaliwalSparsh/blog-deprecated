import React, { Component } from "react";
import { config } from "../config/config.yml";

const AMBIENT_SOUND_URL = "https://raw.githubusercontent.com/PaliwalSparsh/next-blog/feature/branch-for-static-content-hosting/static/audio/rainforest.mp3";

export default class AmbientSoundWidget extends Component {
  state = {
    isPlaying: false
  };

  handleOnClick = () => {
    const {isPlaying} = this.state;
    if(isPlaying) {
      this.refs.audioRef.pause()
    } else {
      this.refs.audioRef.play()
    }
    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    return (
      <div className="ambientSoundWidgetContainer">
        <div
          className="ambientSoundWidgetContainer__button"
          onClick={this.handleOnClick}
        >
          {this.state.isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          )}
        </div>
        <audio ref="audioRef" src={AMBIENT_SOUND_URL} loop></audio>
        <div className="ambientSoundWidgetContainer__directions">
          Turn on ambient sounds to wash away distractions.
        </div>
        <style jsx>{`
          .ambientSoundWidgetContainer {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin-top: 20px;
            margin-bottom: 20px;
          }
          .ambientSoundWidgetContainer__directions {
            color: #c9cfd2;
            width: 80%;
            font-style: italic;
            margin-left: 20px;
          }
          .ambientSoundWidgetContainer__button {
            width: 20%;
            background-color: #e9e9e9;
            font-size: 30px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            height: 30px;
            width: 30px;
            border-radius: 50%;
            transition: 0.2s;
            user-select: none;
            z-index: 10;
          }
          .ambientSoundWidgetContainer__button:hover {
            background-color: ${config.css.primaryLightColor};
          }
          .ambientSoundWidgetContainer__button:active {
            box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.2);
            transform: translate(1px, 1px);
          }
        `}</style>
      </div>
    );
  }
}
