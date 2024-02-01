export const getNewIndex = (usedIndexes) => {
  let newIndex = undefined;

  do {
    newIndex = Math.floor(Math.random() * 10);
  } while (usedIndexes.includes(newIndex));

  return newIndex;
};
