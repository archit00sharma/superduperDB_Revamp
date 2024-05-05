import React, { useState } from 'react';

interface ListItem {
  title: string;
  image: string;
  content: string;
}

interface ImageAccordionProps {
  listItems: ListItem[];
}

const ImageAccordion: React.FC<ImageAccordionProps> = ({ listItems }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0); // Initialize activeIndex with 0

  const onAccordionClick = (index: number) => {
    setActiveIndex(index); // Always set activeIndex to the clicked index
  };

  return (
    <section>
      <div className='toolkit-wrapper'>
        <div className='left-side'>
          <img src={listItems[activeIndex]?.image} alt="" />
        </div>
        <div className='right-side'>
          {listItems.map((item, index) => (
            <div key={index} onClick={() => onAccordionClick(index)}>
              {item.title}
              {activeIndex === index && <p>{item.content}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageAccordion;
