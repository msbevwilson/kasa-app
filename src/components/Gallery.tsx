import React from "react";
import { properties } from '../utility/data';
import Card from "./Card";

export default function Gallery() {
    let listItems = properties.slice(0, 6).map((property) => (
        <div className="col" key={property.id}>
            <Card
                image={property.cover}
                title={property.title}
                className="card"
            />
        </div>
    ));

    return (
        <div className="g-4 row row-cols-md-3 row-cols-1">
            {listItems}
        </div>
    );
}
