import { FC, useCallback } from 'react';

import { shiftStack } from 'features/CardStack/model/shiftStack';
import { codeCards } from 'features/DeveloperExperienceSection/model/sectionData';

import './text-block.scss';

interface TextBlockProps {
  title: string;
  text: string;
  active: boolean;
  index?: number; // Make these optional
  setOrderedCards?: any;
  setActive?: any;
}

const TextBlock: FC<TextBlockProps> = ({
  title,
  text,
  active,
  index,
  setOrderedCards,
  setActive,
}) => {
  const handleCardClick = useCallback(
    (clickedIndex: number, content: string) => {
      if (index !== undefined) {
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
      }
    },
    [index, setOrderedCards, setActive],
  );

  return (
    <div id={`para-${index}`} className="text-block__container">
      <h3
        onClick={() => handleCardClick(index ?? 0, codeCards[index ?? 0])}
        className={active ? 'highlighted' : ''}
      >
        {title}
      </h3>
      <p>{text}</p>
    </div>
  );
};

export default TextBlock;
