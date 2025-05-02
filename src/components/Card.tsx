import React from 'react';
import { Link } from 'react-router-dom';


interface CardProps {
    id?: string;
    image: string;
    title: string;
}

export default function Card({ id, image, title }: CardProps) {
    return (

            <Link className='gallery-card-link'
                to={{
                    pathname: "/rentalpropertycard",
                }}
                state={{ id, image, title }} // Passing properties via state
            >
                <img className="gallery-card" src={image} alt={title} />
                <div className="gallery-card-title">
                    <div>{title}</div>
                </div>
            </Link>

    );
}
