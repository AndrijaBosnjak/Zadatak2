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

export const timer = (time) => {
  return (
   (Math.floor(time / 360000))
    (Math.floor((time % 360000) / 6000)).toString().padStart(2, "0")
    (Math.floor((time % 6000) / 100)).toString().padStart(2, "0")
    (time % 100).toString().padStart(2, "0")
  )
}