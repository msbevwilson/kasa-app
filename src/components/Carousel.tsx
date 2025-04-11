import React, { useState } from "react";
import { properties } from '../utility/data';
import PrevImage from "../images/BackwardVector.svg";
import NextImage from "../images/ForwardVector.svg";

interface CarouselProps {
    id?: string;
    cover?: string;
    title?: string;
}

export default function Carousel({ id, cover, title }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? properties.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === properties.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="carousel">
            <div className="carousel-inner">
                {properties.map((property: CarouselProps, index) => (
                    <div
                        className={`carousel-item ${index === currentIndex ? "active" : ""}`}
                        key={property.id}
                    >
                        <img className="d-block w-100" src={property.cover} alt={property.title} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{property.title}</h5>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" onClick={handlePrev}>
            <img alt="prev" src={PrevImage} />
            </button>
            <button className="carousel-control-next" onClick={handleNext}>
            <img alt="prev" src={NextImage} />
            </button>
        </div>
    );
}
