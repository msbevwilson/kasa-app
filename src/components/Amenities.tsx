import { useState } from 'react';
import '../styles/amenities.scss';
import Caret from "../images/arrow_back_ios-24px 2up.svg";
import MobileCheck from "../utility/MobileCheck";

interface AmenitiesProps {
    amenities: string[];
}

export default function ({ amenities }: AmenitiesProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAmenities = () => {
        setIsOpen(!isOpen);
    };

    return MobileCheck() ? (
        <>
            <button
                className={`details-accordion-header ${isOpen ? 'active' : ''}`}
                type="button"
                onClick={toggleAmenities}
                >
                Amenities
                <span className={`details-caret ${isOpen ? 'rotate' : ''}`}>
                    <img src={Caret} alt="caret" />
                </span>
            </button>
            <div 
                className={`details-accordion-content ${isOpen ? 'open' : ''}`}
            >
                {amenities.map((amenity, index) => (
                    <div style={{ display: "flex" }} key={index}>
                        {amenity}
                    </div>
                ))}
            </div>
        </>
    ) : (
        <div className="amenities-collapsible">
            <button
                className={`details-accordion-header ${isOpen ? 'active' : ''}`}
                type="button"
                onClick={toggleAmenities}
                >
                Amenities
                <span className={`details-caret ${isOpen ? 'rotate' : ''}`}>
                    <img src={Caret} alt="caret" />
                </span>
            </button>
            <div 
                className={`details-accordion-content ${isOpen ? 'open' : ''}`}
            >
                {amenities.map((amenity, index) => (
                    <div style={{ display: "flex" }} key={index}>
                        {amenity}
                    </div>
                ))}
            </div>
        </div>
    );
};
