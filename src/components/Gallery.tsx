import { useState, useEffect } from "react";
import { properties } from '../utility/data';
import Card from "./Card";
import "../styles/gallery.scss";
import MobileCheck from "../utility/MobileCheck";


export default function Gallery() {

    let listItems = properties.slice(0, MobileCheck() ? 3 : 6).map((property) => (
        <Card
            key={property.id}
            id={property.id}
            image={property.cover}
            title={property.title}
        />
    ));

    return (
        <div className="gallery-grid-container">
            {listItems}
        </div>
    );
}
