    // ova funkcija ce primat array vec koristenih indexa
    // funkcija ce probati postavljati nove indexe za kandidate sve dok ne postavi na idx koji vec nije koristen
    // taj idx ce biti povratna vrijednost ove funkcije

export const getNewIndex = (usedIndexes) => {
    let newIndex = undefined;
  
    do {
      newIndex = Math.floor(Math.random() * 10)
    } while (usedIndexes.includes(newIndex))
  
    return newIndex;
  }