import React from "react";
import { properties } from '../utility/data';
import Card from "./Card";
import "../styles/gallery.scss";

export default function Gallery() {
    let listItems = properties.slice(0, 6).map((property) => (
        <div key={property.id}>
            <Card
                id={property.id}
                image={property.cover}
                title={property.title}
            />
        </div>
    ));

    return (
        <div className="gallery-grid-container">
            {listItems}
        </div>
    );
}
