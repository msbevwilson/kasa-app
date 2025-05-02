import { useState } from 'react';
import '../styles/amenities.scss';
import Caret from "../images/arrow_back_ios-24px 2up.svg";

interface AmenitiesProps {
    amenities: string[];
}

export default function ({ amenities }: AmenitiesProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAmenities = () => {
        setIsOpen(!isOpen);
    };

    return (
        // <div className="accordion-item">
        //     <h2 className="accordion-header">
        //         <button
        //             className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
        //             onClick={toggleAmenities}
        //         >
        //             <b>Amenities</b>
        //         </button>
        //     </h2>
        //     <div className={`accordion-collapse ${isOpen ? 'show' : 'collapse'}`}>
        //         <div className="accordion-body">
        //             <ul>
        //                 {amenities.map((amenity, index) => (
        //                     <li key={index}>{amenity}</li>
        //                 ))}
        //             </ul>
        //             </div>
        //     </div>
        // </div>
        <div className="amenities-collapsible">
                <button className='amenities-collapsible-header'
                    onClick={toggleAmenities}
                >
                    Amenities
                </button>
            {isOpen && <div>
                    <ul>
                        {amenities.map((amenity, index) => (
                            <li key={index}>{amenity}</li>
                        ))}
                    </ul>
                </div>}
        </div>
    );
};
