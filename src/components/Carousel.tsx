import React, { useState } from "react";
import { properties } from '../utility/data';
import PrevImage from "../images/BackwardVector.svg";
import NextImage from "../images/ForwardVector.svg";

interface CarouselProps {
    id: string; // The ID of the property to display
}

export default function Carousel({ id }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    // Find the property by its ID
    const property = properties.find((property) => property.id === id);

    // If no property is found, return a fallback
    if (!property) {
        return <p>Property not found</p>;
    }

    const pictures = property.pictures;


    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="carousel">
            <div className="carousel-inner">
                {pictures.map((picture, index) => (
                    <div
                        className={`carousel-item ${index === currentIndex ? "active" : ""}`}
                        key={index}
                    >
                        <img className="d-block w-100" src={picture} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" onClick={handlePrev}>
                <img alt="Previous" src={PrevImage} />
            </button>
            <button className="carousel-control-next" onClick={handleNext}>
                <img alt="Next" src={NextImage} />
            </button>
        </div>
    );
}
