import React, { useState, useEffect } from "react";
import { properties } from '../utility/data';
import Description from "./Description";
import Amenities from "./Amenities";
import MobileCheck from "../utility/MobileCheck";
import '../styles/details.scss';

interface DetailsProps {
    id: string; // The ID of the property to display
}

export default function Details({ id }: DetailsProps) {

    let property = properties.find((property) => property.id === id);

    if (!property) {
        return <div>Property not found</div>;
    }

    return MobileCheck() ? (
        <div style={{
        display: "flex",
        flexDirection: "column",
        maxHeight: "382px",
        minHeight: "100px",
        justifyContent: "space-between"
    }}>
            <div style={{ display: "flex" }}>
                <Description description={property.description} />
            </div>
            <div style={{ display: "flex" }}>
                <Amenities amenities={property.equipments} />
            </div>
        </div>
    ) : (
        <div className="details">
            <span style={{ display: "flex" }}>
                <Description description={property.description} />
            </span>
            <span style={{ display: "flex" }}>
                <Amenities amenities={property.equipments} />
            </span>
        </div>
    );
}
