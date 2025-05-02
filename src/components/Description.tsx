import { useState } from 'react';
import '../styles/description.scss';
import Caret from "../images/arrow_back_ios-24px 2up.svg";

interface DescriptionProps {
    description: string;
}

export default function Description({ description }: DescriptionProps) {
    let [isOpen, setIsOpen] = useState(false);

    let toggleDescription = () => {
      setIsOpen(!isOpen);
    };

    return (
        // <div className="description-collapsible">
        //     <div className="description-collapsible-item">
        //         <h2 className="description-collapsible-header">
        //             <button
        //                 className={`description-collapsible-button ${isOpen ? '' : 'collapsed'}`}
        //                 onClick={toggleDescription}
        //             >
        //                 <b>Description</b>
        //             </button>
        //         </h2>
        //         <div className={`description-collapsible-collapse ${isOpen ? 'show' : 'collapse'}`}>
        //             <div className="description-collapsible-body">{description}</div>
        //         </div>
        //     </div>
        // </div>
        <div className="description-collapsible">
            <button className='description-collapsible-header ' onClick={toggleDescription}>
                {/* {isOpen ? 'Hide' : 'Show'}  */}
                Description
            </button>
            {isOpen && <div>{description}</div>}
        </div>
    );
};
