import { useState } from 'react';

interface DescriptionProps {
    description: string;
}

export default function Description({ description }: DescriptionProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapsible-item">
            <h2 className="collapsible-header">
                <button
                    className={`collapsible-button ${isOpen ? '' : 'collapsed'}`}
                    onClick={toggleAccordion}
                >
                    <b>Description</b>
                </button>
            </h2>
            <div className={`collapsible-collapse ${isOpen ? 'show' : 'collapse'}`}>
                <div className="collapsible-body">{description}</div>
            </div>
        </div>
    );
};
