/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { CodeTabs } from 'features/CodeTabs'; // Adjust the import path

import './possibilities-section.scss';
import { possibilitiesTabs } from '../model/sectionData';

const PossibilitiesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const containerRef = useRef<HTMLElement | null>(null);

  const handleScroll = useCallback(() => {
    // Get the current scroll position of the window
    // const scrollY = window.scrollY;
    const windowHeight = window.innerHeight; // Get the height of the viewport

    // Find the paragraph closest to the center of the viewport
    for (let i = 0; i < possibilitiesTabs.length; i++) {
      const paragraphElement = document.getElementById(`paragraph-${i}`);

      if (paragraphElement) {
        const paragraphTop = paragraphElement.getBoundingClientRect().top;

        // Define a threshold (e.g., 50% of viewport height) to trigger the highlighting
        const threshold = windowHeight * 0.7;

        // Check if the paragraph is within the threshold from the top of the viewport
        if (paragraphTop <= threshold) {
          setActiveTab(i);
        } else {
          // If the paragraph is outside the threshold, exit the loop because paragraphs are in order
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    const containerElement = containerRef.current;

    if (containerElement) {
      const wheelEventListener = (e: {
        preventDefault: () => void;
        stopPropagation: () => void;
        deltaY: number;
      }) => {
        if (!isMouseOver) {
          return;
        }

        e.preventDefault();
        e.stopPropagation();

        const direction = e.deltaY > 0 ? 1 : -1;
        setActiveTab(
          (prevTab) => (prevTab + direction + possibilitiesTabs.length) % possibilitiesTabs.length,
        );
      };

      containerElement.addEventListener('wheel', wheelEventListener, { passive: true });

      return () => {
        containerElement.removeEventListener('wheel', wheelEventListener);
      };
    }
  }, [isMouseOver]);

  useEffect(() => {
    // Attach a scroll event listener to the window to track scrolling
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Remove the scroll event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleKeywordClick = (paragraphIndex: React.SetStateAction<number>) => {
    setActiveTab(paragraphIndex);
  };

  return (
    <>
      <h2 className="superdb__title">What you can do with SuperDuperDB:</h2>

      <section ref={containerRef} className="possibilities__container">
        <div className="possibilities__text">
          <div className="paragraphs-container">
            <p id="paragraph-0">
              <strong
                className={`keywords ${activeTab === 0 ? 'highlighted' : ''}`}
                onClick={() => handleKeywordClick(0)}
              >
                Deploy
              </strong>{' '}
              all your AI models to automatically{' '}
              <strong
                className={`keywords ${activeTab === 0 ? 'highlighted' : ''}`}
                onClick={() => handleKeywordClick(0)}
              >
                compute
              </strong>{' '}
              outputs (inference) in your datastore in a single environment with simple Python
              commands.
            </p>
            <p id="paragraph-1">
              <strong
                className={`keywords ${activeTab === 1 ? 'highlighted' : ''}`}
                onClick={() => handleKeywordClick(1)}
              >
                Train
              </strong>{' '}
              models on your data in your datastore simply by querying without additional ingestion
              and pre-processing.
            </p>
            <p id="paragraph-2">
              <strong
                className={`keywords ${activeTab === 2 ? 'highlighted' : ''}`}
                onClick={() => handleKeywordClick(2)}
              >
                Integrate
              </strong>{' '}
              AI APIs (such as OpenAI) to work together with other models on your data effortlessly.
            </p>
            <p id="paragraph-3">
              <strong
                className={`keywords ${activeTab === 3 ? 'highlighted' : ''}`}
                onClick={() => handleKeywordClick(3)}
              >
                Search
              </strong>{' '}
              your data with vector-search, including model management and serving.
            </p>
          </div>
        </div>
        <div className="possibilities__code">
          <CodeTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabsData={possibilitiesTabs}
            isMouseOver={isMouseOver}
            setIsMouseOver={setIsMouseOver}
          />
        </div>
      </section>
    </>
  );
};

export default PossibilitiesSection;
