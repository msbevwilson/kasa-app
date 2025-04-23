import { useState } from 'react';

interface AmenitiesProps {
    amenities: string[];
}

export default function ({ amenities }: AmenitiesProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button
                    className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
                    onClick={toggleAccordion}
                >
                    <b>Amenities</b>
                </button>
            </h2>
            <div className={`accordion-collapse ${isOpen ? 'show' : 'collapse'}`}>
                <div className="accordion-body">
                    <ul>
                        {amenities.map((amenity, index) => (
                            <li key={index}>{amenity}</li>
                        ))}
                    </ul>
                    </div>
            </div>
        </div>
    );
};
