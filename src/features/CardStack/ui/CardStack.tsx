import { FC, useCallback, useEffect, useState } from 'react';

import { CodeHighlighter } from 'shared/components/CodeHighlighter';
import { TABS_SWITCH_INTERVAL } from 'shared/constants';

import './card-stack.scss';
import { shiftStack } from '../model/shiftStack';

type CardStackProps = {
  setActive: any;
  setOrderedCards: any;
  orderedCards: any;
};

const orderedData: any = {
  0: '#first',
  1: '#second',
  2: '#third',
};

const CardStack: FC<CardStackProps> = ({ setActive, setOrderedCards, orderedCards }) => {
  const [hovered, setHovered] = useState(false);

  const handleCardClick = useCallback((index: number, content: string) => {
    const highlitedIndex = content.split(' ')[0];

    setOrderedCards((prev: any) => {
      let highlight = prev.map((card: string, i: number) => {
        if (card.split(' ')[0] == highlitedIndex) {
          return i;
        }
      });

      highlight = highlight.filter((element: any) => {
        return element !== undefined;
      });

      return shiftStack(prev, highlight[0], setActive);
    });
  }, []);

  // orderedCards = [orderedCards[0]];
  return (
    <div
      className="card-stack"
      // onMouseEnter={() => setHovered(true)}
      // onMouseLeave={() => setHovered(false)}
    >
      {orderedCards
        .slice(0)
        .reverse()
        .map((content: any, index: any) => {
          const highlitedIndex = content.split(' ')[0];
          const animated =
            highlitedIndex === '#first'
              ? 'card-stack__card_first'
              : highlitedIndex === '#third'
              ? 'card-stack__card_last'
              : 'card-stack__card_middle';

          return (
            <div
              key={content}
              className={`card-stack__card ${animated}`}
              onClick={(e) => {
                handleCardClick(index, content);
              }}
            >
              <CodeHighlighter code={content} className="developer-experience__code_highlighter" />
            </div>
          );
        })}
    </div>
  );
};

export default CardStack;
