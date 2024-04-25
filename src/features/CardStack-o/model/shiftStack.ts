const orderedData: any = {
  0: '#first',
  1: '#second',
  2: '#third',
};

export const shiftStack = (cards: string[], index: number, setActive: any) => {
  if (index < 0 || index >= cards.length) {
    return cards;
  }

  const newIndex = index === 0 ? cards.length - 1 : index;

  const newArray = [...cards];
  const elementsToMove = newArray.splice(0, newIndex);

  const highlitedIndex = [...newArray, ...elementsToMove][cards.length - 1].split(' ')[0];

  Object.keys(orderedData).map((key) => {
    if (orderedData[key] == highlitedIndex) {
      setActive(key);
    }
  });

  return [...newArray, ...elementsToMove];
};
