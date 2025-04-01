import React from 'react';
import "../styles/banner.scss";
import BannerImage from "../images/BannerImage.png";

export default function Banner() {
    return (
        <div className="banner">
            <div className="section1">
                <img className="maskGroupIcon" alt="" src={BannerImage} />
                <b className="atHomeEverywhere">At home, everywhere, and anywhere</b>
            </div>
        </div>
    )
}
