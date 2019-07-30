import React, { Component } from "react";
import { config } from "../config/config.yml";

export default class QuickNotes extends Component {
  state = {
    isOpen: false,
    content: ""
  };

  copyText = () => {
    this.refs.notes.select();
    document.execCommand("copy");
  };

  handleChange = event => {
    this.setState({ content: event.target.value });
  };

  toggleIsOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className="quickNotes">
        <div
          className="quickNotes__toggleNotesButton"
          onClick={this.toggleIsOpen}
        >
          {this.state.isOpen ? "✘" : "✎"}
        </div>
        {this.state.isOpen && (
          <div>
            <div className="quickNotes__overlay" />
            <div className="quickNotes__modal">
              <div className="quickNotes__modal__header">
                <div className="quickNotes__modal__title">Notes</div>
                <div
                  className="quickNotes__modal__copyButton"
                  onClick={this.copyText}
                >
                  COPY
                </div>
              </div>
              <textarea
                ref="notes"
                placeholder="Start writing notes here..."
                className="quickNotes__modal__textarea"
                value={this.state.content}
                onChange={this.handleChange}
                autoFocus
              />
            </div>
          </div>
        )}
        <style jsx>{`
          .quickNotes__toggleNotesButton {
            background-color: ${config.css.primaryColor};
            font-size: 30px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            height: 50px;
            width: 50px;
            border-radius: 50%;
            box-shadow: 0 5px 15px hsla(0, 0%, 0%, 0.2);
            position: fixed;
            bottom: 20px;
            right: 20px;
            transition: 0.2s;
            opacity: 0.85;
            user-select: none;
            z-index: 10;
          }
          .quickNotes__toggleNotesButton:hover {
            opacity: 1;
          }
          .quickNotes__toggleNotesButton:active {
            box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.2);
            opacity: 1;
            transform: translate(1px, 1px);
          }
          .quickNotes__overlay {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            background-color: white;
            opacity: 0.6;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            z-index: 3;
          }
          .quickNotes__modal {
            position: fixed;
            width: 500px;
            height: 200px;
            top: 50%;
            left: 50%;
            margin-top: -100px;
            margin-left: -250px;
            border-radius: 7px;
            box-shadow: 0 5px 15px hsla(0, 0%, 0%, 0.2);
            z-index: 4;
            background-color: ${config.css.primaryLightColor};
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: space-between;
            padding: 10px;
          }
          .quickNotes__modal__header {
            max-height: 60px;
            height: 20%;
            padding-bottom: 17px;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
          }
          .quickNotes__modal__title {
            padding-left: 6px;
            width: 50%;
            font-family: "EB Garamond", serif;
            font-size: 36px;
          }
          .quickNotes__modal__textarea {
            padding: 10px;
            box-sizing: border-box;
            color: #1a1a1a;
            font-size: 18px;
            height: 70%;
            width: 100%;
            border: none;
            overflow: auto;
            outline: none;
            box-shadow: none;
            resize: none;
            background-color: #fdebe2;
            border-radius: 7px;
          }
          .quickNotes__modal__copyButton {
            position: absolute;
            font-weight: bold;
            top: 21px;
            right: 10px;
            background-color: ${config.css.primaryColor};
            font-size: 14px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            height: 28px;
            width: 58px;
            border-radius: 14px;
            box-shadow: inset 0 5px 15px hsla(0, 0%, 0%, 0.2);
            transition: 0.2s;
            opacity: 1;
            user-select: none;
          }
          .quickNotes__modal__copyButton:hover {
            opacity: 0.8;
          }
          .quickNotes__modal__copyButton:active {
            box-shadow: inset 0 4px 6px hsla(0, 0%, 0%, 0.2);
            opacity: 0.7;
          }
          @media screen and (max-width: 425px) {
            .quickNotes__modal {
              position: fixed;
              width: 88vw;
              height: 80vh;
              top: 2vh;
              left: 1.75vh;
              margin-top: 0px;
              margin-left: 0px;
            }
            .quickNotes__modal__textarea {
              height: 87%;
            }
          }
        `}</style>
      </div>
    );
  }
}
