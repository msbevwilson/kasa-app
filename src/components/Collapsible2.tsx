import React, { useState } from 'react';
import DownImage from "../images/arrow_back_ios-24px 2down.svg";
import UpImage from "../images/arrow_back_ios-24px 2up.svg";
import "../styles/background.scss";

interface CollapsibleProps {
    title: string;
    children: any;
}

export default function Collapsible({ title, children }: CollapsibleProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapsible = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button 
                onClick={toggleCollapsible} 
                style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    fontSize: '1rem',
                    color: 'white',
                    textAlign: 'left',
                    backgroundColor: 'red',
                    border: 'none',
                    position: 'relative'
                }}
            >
                {title} <img src={isOpen ? DownImage : UpImage} alt="Toggle Icon" />
            </button>
            {isOpen && 
                <div>{children}</div>
            }
        </div>
    );
};
