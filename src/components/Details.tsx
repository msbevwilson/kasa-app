import React, { useState } from "react";
import { properties } from '../utility/data';
import Description from "./Description";
import Amenities from "./Amenities";
import '../styles/details.scss';

interface DetailsProps {
    id: string; // The ID of the property to display
}

export default function Details({ id }: DetailsProps) {
    const property = properties.find((property) => property.id === id);

    if (!property) {
        return <div>Property not found</div>;
    }

  	return (
        <div className="details">
            <span>
                <Description description={property.description} />
            </span>
            <span>
                <Amenities amenities={property.equipments} />
            </span>
        </div>
    );
}
