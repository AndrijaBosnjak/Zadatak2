export const testIdxCandidate = ({index}) => { // ova funkcija ce primat array vec koristenih indexa
    let idxCandidate = undefined;
    const generateRandomNumber = Math.floor(Math.random() * 10);

    
    const usedIndexArray = [];

    const addElement = usedIndexArray.push(index);

    for (let i = 0; i < usedIndexArray.length; i++) {
        if (generateRandomNumber <= usedIndexArray[i]) {
            idxCandidate = generateRandomNumber;      
        }   
    }
    
    // funkcija ce probati postavljati nove indexe za kandidate sve dok ne postavi na idx koji vec nije koristen
    // taj idx ce biti povratna vrijednost ove funkcije
}

const getNewIndex = (usedIndexes) => {
    let newIndex = undefined;
  
    do {
      newIndex = Math.floor(Math.random() * 10)
    } while (usedIndexes.includes(newIndex))
  
    return newIndex;
  }