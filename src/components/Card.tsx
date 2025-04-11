import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
    image: string;
    title: string;
    className?: string;
}

export default function Card({ image, title, className }: CardProps) {
    return (
        <div className={className}>
            <Link
                to={{
                    pathname: "/rentalpropertycard",
                }}
                state={{ image, title }} // Passing properties via state
            >
                <img className="card-img" src={image} alt={title} />
                <div className="card-img-overlay">
                    <div className="card-title h5">{title}</div>
                </div>
            </Link>
        </div>
    );
}
