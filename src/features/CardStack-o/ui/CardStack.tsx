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

const CardStack: FC<CardStackProps> = ({ setActive, setOrderedCards, orderedCards }) => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setOrderedCards((prev: any) => {
          return shiftStack(prev, 1, setActive);
        });
      }, TABS_SWITCH_INTERVAL);

      return () => clearInterval(interval);
    }
  }, [hovered]);

  const handleCardClick = useCallback(
    (index: number) => {
      if (index !== orderedCards.length - 1) {
        setOrderedCards((prev: any) => shiftStack(prev, index, setActive));
      }
    },
    [orderedCards.length],
  );

  return (
    <div
      className="card-stack"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {orderedCards.map((content: any, index: any) => {
        const animated =
          index === 0
            ? 'card-stack__card_first'
            : index === orderedCards.length - 1
            ? 'card-stack__card_last'
            : 'card-stack__card_middle';

        return (
          <div
            key={content}
            className={`card-stack__card ${animated}`}
            onClick={() => handleCardClick(index)}
          >
            <CodeHighlighter code={content} className="developer-experience__code_highlighter" />
          </div>
        );
      })}
    </div>
  );
};

export default CardStack;
