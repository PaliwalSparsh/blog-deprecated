import React from "react";

export default function Warning(props) {
    return (
        <div className="warningContainer">
            <div className="warningContainer__text">{props.message}</div>
            <style jsx>{`
                .warningContainer {
                    margin: 10px 0px;
                    padding: 12px;
                    color: #D8000C;
                    background-color: #FFD2D2;
                    border: 1px solid #D8000C;
                    border-radius: 7px;
                    line-height: 24px;
                }
            `}</style>
        </div>
    );
}
