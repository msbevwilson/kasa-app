import React, { useState } from 'react';
import { properties } from '../utility/data';
import PrevImage from "../images/BackwardVector.svg";
import NextImage from "../images/ForwardVector.svg";

interface CarouselProps {
    id: string;
}

export default function Carousel({ id }: CarouselProps) {
//let Carousel: React.FC<CarouselProps> = ({ images }) => {
    let [currentIndex, setCurrentIndex] = useState(0);

    let property = properties.find((property) => property.id === id);

    // If no property is found, return a fallback
    if (!property) {
        return <p>Property not found</p>;
    }

    let pictures = property.pictures;


    let handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    let handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="carousel">
            <button onClick={handlePrev}>
                <img alt="Previous" src={PrevImage} />
            </button>
            <div className="carousel-inner">
                {pictures.map((picture, index) => (
                    <div
                        key={index}
                    >
                        <img src={picture} />
                    </div>
                ))}
            </div>
            {/* <div className="carousel-image">
                <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    style={{ width: '100%', height: 'auto' }}
                />
                <img src={picture} />
            </div> */}
            <button onClick={handleNext}>
                <img alt="Next" src={NextImage} />
            </button>
        </div>
    );
};

// Example usage:
// let images = [
//   { src: 'image1.jpg', alt: 'Image 1' },
//   { src: 'image2.jpg', alt: 'Image 2' },
//   { src: 'image3.jpg', alt: 'Image 3' },
// ];
// <Carousel images={images} />;