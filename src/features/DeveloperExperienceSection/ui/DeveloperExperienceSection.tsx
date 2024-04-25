import { useCallback, useEffect, useRef, useState } from 'react';

import { CardStack } from 'features/CardStack';
import { shiftStack } from 'features/CardStack/model/shiftStack';
import { TextBlock } from 'shared/components/TextBlock';

import './developer-experience-section.scss';
import { codeCards, textBlocks } from '../model/sectionData';

const orderedData: any = {
  0: '#first',
  1: '#second',
  2: '#third',
};

const DeveloperExperienceSection = () => {
  const [active, setActive] = useState(0);
  const [orderedCards, setOrderedCards] = useState(codeCards);

  const containerRef = useRef<HTMLDivElement | null>(null);

  // useEffect(()=>{
  //   setOrderedCards((prev: any) => shiftStack(prev, 1, setActive));
  // },[])

  const handleScrollTwo = useCallback(() => {
    const scrollY = window.scrollY;

    for (let i = 0; i < codeCards.length; i++) {
      const paragraphElement = document.getElementById(`para-${i}`);

      if (paragraphElement) {
        const paragraphTop = paragraphElement.getBoundingClientRect().top + scrollY;

        // Use a percentage-based threshold (e.g., 50% of viewport height)
        const thresholdPercentage = 60; // Adjust this value as needed

        const threshold = (window.innerHeight * thresholdPercentage) / 100;

        if (paragraphTop <= scrollY + threshold) {
          setOrderedCards((prev: any) => {
            return shiftStack(codeCards, i, setActive);
          });
        } else {
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollTwo);

    return () => {
      window.removeEventListener('scroll', handleScrollTwo);
    };
  }, [handleScrollTwo]);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollTwo);

    return () => {
      window.removeEventListener('scroll', handleScrollTwo);
    };
  }, [handleScrollTwo]);

  useEffect(() => {
    setOrderedCards((prev: any) => shiftStack(prev, 0, setActive));
  }, []);

  return (
    <section className="developer-experience__container">
      <h2 className="developer-experience__title">A developer experience tailored to AI </h2>

      <div ref={containerRef} className="developer-experience__content">
        <div className="developer-experience__text">
          {textBlocks.map((block, index) => (
            <TextBlock
              setActive={setActive}
              setOrderedCards={setOrderedCards}
              index={index}
              active={active == index}
              key={block.title}
              {...block}
            />
          ))}
        </div>
        <div className="developer-experience__code">
          <CardStack
            setActive={setActive}
            orderedCards={orderedCards}
            setOrderedCards={setOrderedCards}
          />
        </div>
      </div>
    </section>
  );
};

export default DeveloperExperienceSection;
