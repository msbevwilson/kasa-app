import React, { useState } from 'react';
import "../styles/accordion2.scss";
import Caret from "../images/arrow_back_ios-24px 2up.svg";

interface AccordionProps {
  title: string;
  content: string;
}

export default function Accordion2({ title, content }: AccordionProps) {

  let [activeIndex, setActiveIndex] = useState(false);

  let handleItemClick = () => {
    setActiveIndex(!activeIndex);
};

  return (
    <div className="values">
        <div className="dropdownOpen">
          <button
              className={`topBar ${activeIndex ? 'active' : ''}`}
              type="button"
              onClick={handleItemClick}
              >
                <h2 className="amenities">{title}</h2>

              <span className={`about-caret ${activeIndex ? 'rotate' : ''}`}>
                <img className="arrowBackIos24px2Icon" alt="" src={Caret} />

              </span>
          </button>
          <div className='about-accordion-content'>
            <div 
                className={`about-accordion-content-text ${activeIndex ? 'open' : ''}`}
            >
                {content}
            </div>
          </div>
        </div>
        <p></p>
    </div>
  );
};
