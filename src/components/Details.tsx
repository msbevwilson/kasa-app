import React, { useState } from "react";
import { properties } from '../utility/data';
import Description from "./Description";
import Amenities from "./Amenities";

interface DetailsProps {
    id: string; // The ID of the property to display
}

export default function Details({ id }: DetailsProps) {
    const property = properties.find((property) => property.id === id);

    if (!property) {
        return <div>Property not found</div>;
    }

  	return (
        <div className="row">
            <div className="offset-1 col-4">
                <Description description={property.description} />
            </div>
            <div className="offset-1 col-4">
                <Amenities amenities={property.equipments} />
            </div>
        </div>
    );
}
