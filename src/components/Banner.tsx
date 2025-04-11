import React from 'react';
import BannerImage from "../images/BannerImage.png";

export default function Banner() {
    return (
        <div className="col">
            <div className='card'>
                <img style={{ height: 223, borderRadius: 25 }} className="card-img" alt="banner" src={BannerImage} />
                <div className="card-img-overlay text-white d-flex justify-content-center align-items-end overlay-dark">
                    <p className='bannerText'>At home, everywhere, and anywhere</p>
                </div>
            </div>
        </div>
    )
}
