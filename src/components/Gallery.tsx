import React from "react";
//import PropertyList from "./PropertyList";
import { properties } from '../utility/data';
import "../styles/gallery.scss";

import PropertTile from "./PropertyTile";

export default function Gallery() {
    const listItems = properties.slice(0, 6).map((property) => (
        <div key={property.id}>
            <img className="img" src={property.cover} alt={property.title} />
            <div className="thumbChild" />
            <b className="titleOfThe">{property.title}</b>
        </div>
    ));

    return (
        <div className="gallery">
            <div className="background" />
            <div className="thumb">
                {listItems[0]}
            </div>
            <div className="thumb1">
                {listItems[1]}
            </div>
            <div className="thumb2">
                {listItems[2]}
            </div>
            <div className="thumb3">
                {listItems[3]}
            </div>
            <div className="thumb4">
                {listItems[4]}
            </div>
            <div className="thumb5">
                {listItems[5]}
            </div>
        </div>
    );
}
