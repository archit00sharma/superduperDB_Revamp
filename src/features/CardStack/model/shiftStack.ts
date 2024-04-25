const orderedData: any = {
  0: '#first',
  1: '#second',
  2: '#third',
};

export const shiftStack = (cards: string[], index: number, setActive: any) => {
  if (index < 0 || index >= cards.length) {
    return cards;
  }

  const newArray1 = [...cards];
  const newArray2 = [...cards];
  const newArray3 = [...cards];

  const elementsToMove = newArray1.splice(0, index);
  const highlightedElement = cards[index];
  const remainingElements = newArray3.splice(index + 1);

  const updatedArr: any = [highlightedElement, ...remainingElements, ...elementsToMove];
  const highlitedIndex = [...updatedArr][0].split(' ')[0];

  Object.keys(orderedData).map((key) => {
    if (orderedData[key] == highlitedIndex) {
      setActive(+key);
    }
  });

  return updatedArr;
};
