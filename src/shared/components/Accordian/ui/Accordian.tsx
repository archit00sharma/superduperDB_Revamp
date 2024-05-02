import React, { useState } from 'react';

interface AccordionProps {
  items: any[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [displayCount, setDisplayCount] = useState<number>(3);
  const [showLess, setShowLess] = useState<boolean>(false);

  const onAccordionClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const showMore = () => {
    setDisplayCount(items.length);
    setShowLess(true);
  };

  const showLessHandler = () => {
    setDisplayCount(3);
    setShowLess(false);
  };

  return (
    <div className="info-list-wrapper">
      {items.slice(0, displayCount).map((item, index) => (
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
      {displayCount < items.length && !showLess && (
        <div onClick={showMore} className="show-more">
          Show more
        </div>
      )}
      {showLess && (
        <div onClick={showLessHandler} className="show-more">
          Show less
        </div>
      )}
    </div>
  );
};

export default Accordion;
