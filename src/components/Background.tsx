import React from 'react';
import "../styles/background.scss";
import BackgroundImage from "../images/Background.png";

export default function Background() {
    return (
        <div className="background">
            <div className="section1">
                <img className="maskGroupIcon" alt="" src={BackgroundImage} />
            </div>
        </div>
    )
}
