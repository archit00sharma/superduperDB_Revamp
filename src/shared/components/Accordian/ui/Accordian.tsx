import React, { useState } from 'react';


interface AccordionProps {
  items: any;
}


const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [displayCount, setDisplayCount] = useState(3);

  const onAccordionClick = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const showMore = () => {
    setDisplayCount(items.length);
  };

  return (
    <div className="info-list-wrapper">
      {items.slice(0, displayCount).map((item: any, index: any) => (
        <div key={index}>
          <div className="frame20">
            <div className="info-details" onClick={() => onAccordionClick(index)}>
              <div className="lorem-ipsum-dolor6">
                <i>{item.title}</i>
              </div>
              <div className="info-icon">
                {activeIndex === index ? (
                  <span>
                    <img
                      className="fichevron-down-icon"
                      loading="lazy"
                      alt=""
                      src="../../../../images/fichevrondown.svg"
                    />
                  </span>
                ) : (
                  <span>
                    <img
                      className="fichevron-down-icon"
                      loading="lazy"
                      alt=""
                      src="../../../../images/fichevrondown.svg"
                    />
                  </span>
                )}
              </div>
            </div>
          </div>
          {activeIndex === index && <div className="content">{item.content}</div>}
          <div className="info-items" />
        </div>
      ))}
      {displayCount < items.length && (
        <div onClick={showMore} className="show-more">
          Show more
        </div>
      )}
    </div>
  );
};

export default Accordion;
