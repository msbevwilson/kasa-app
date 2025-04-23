import React from 'react';

interface CollapsibleProps {
    title: string;
    children: React.ReactNode;
}

export default function Collapsible({ title, children }: CollapsibleProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleCollapsible = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="row">
            <h2 className="collapsible-header">
                <button
                    className={`collapsible-button ${isOpen ? '' : 'collapsed'}`}
                    onClick={toggleCollapsible}
                >
                    {title}
                </button>
            </h2>
            <div className={`collapsible-collapse ${isOpen ? 'show' : 'collapse'}`}>
                <div className="collapsible-body">{children}</div>
            </div>
        </div>
        
    );
};
