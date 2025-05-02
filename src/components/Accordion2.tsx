import React, { useState } from 'react';
import "../styles/accordion.scss";
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
    <>
      <button
          className={`about-accordion-header ${activeIndex ? 'active' : ''}`}
          type="button"
          onClick={handleItemClick}
          >
          {title}
          <span className={`about-caret ${activeIndex ? 'rotate' : ''}`}>
            <img src={Caret} alt="caret" />
          </span>
      </button>
      <div 
        className={`about-accordion-content ${activeIndex ? 'open' : ''}`}
      >
        {content}
      </div>
      <p></p>
    </>
  );
};
