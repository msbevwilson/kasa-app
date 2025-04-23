import { useState } from 'react';

interface AccordionItemProps {
    title: string;
    content: string;
}

function AccordionItem({ title, content }: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='row'>
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button
                    className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
                    onClick={toggleAccordion}
                >
                    {title}
                </button>
            </h2>
            <div className={`accordion-collapse ${isOpen ? 'show' : 'collapse'}`}>
                <div className="accordion-body">{content}</div>
            </div>
        </div>
        </div>
    );
};

function Accordion() {
    const accordionData = [
        {
            title: 'Reliability',
            content:
                'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
        },
        {
            title: 'Respect',
            content:
                'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
        },
        {
            title: 'Service',
            content:
                'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
        },
        {
            title: 'Security',
            content:
                "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
        },
    ];

    return (
        <div className="accordion">
            {accordionData.map((item, index) => (
                <AccordionItem key={index} title={item.title} content={item.content} />
            ))}
        </div>
    );
};

export default Accordion;
