import { useState } from 'react';
import "../styles/collapsible.scss";

interface CollapsibleItemProps {
    title: string;
    children: any;
}

export default function CollapsibleItem({ title, children }: CollapsibleItemProps) {
    let [isOpen, setIsOpen] = useState(false);

    let toggleCollapsible = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='about-collapsible'>
            <h2>
                <button
                    className={`about-collapsible-button ${isOpen ? 'about-collapsible-button-active' : ''}`}
                    onClick={toggleCollapsible}
                >
                    {title}
                </button>
            </h2>
            <div className="about-panel"
                style={{ display: isOpen ? 'block' : 'none' }}
            >
                <div>{children}</div>
            </div>
        </div>
    );
};
