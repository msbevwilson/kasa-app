import { useState } from 'react';
import '../styles/description.scss';
import "../styles/details.scss";
import Caret from "../images/arrow_back_ios-24px 2up.svg";
import MobileCheck from "../utility/MobileCheck";

interface DescriptionProps {
    description: string;
}

export default function Description({ description }: DescriptionProps) {
    let [isOpen, setIsOpen] = useState(false);

    let toggleDescription = () => {
      setIsOpen(!isOpen);
    };

    return MobileCheck() ? (
        <>
            <button
                className={`details-accordion-header ${isOpen ? 'active' : ''}`}
                type="button"
                onClick={toggleDescription}
                >
                Description
                <span className={`details-caret ${isOpen ? 'rotate' : ''}`}>
                    <img src={Caret} alt="caret" />
                </span>
            </button>
            <div 
                className={`details-accordion-content ${isOpen ? 'open' : ''}`}
            >
            {description}
            </div>
        </>
    ) : (      
        <div className="description-collapsible">
            <button
                className={`details-accordion-header ${isOpen ? 'active' : ''}`}
                type="button"
                onClick={toggleDescription}
                >
                Description
                <span className={`details-caret ${isOpen ? 'rotate' : ''}`}>
                    <img src={Caret} alt="caret" />
                </span>
            </button>
            <div 
                className={`details-accordion-content ${isOpen ? 'open' : ''}`}
            >
            {description}
            </div>
        </div>
    );
};
