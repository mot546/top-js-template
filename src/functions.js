export const capitalize = (word)=>{
    const firstLetter = word[0];
    const restOfTheWord = word.slice(1);
    const capitalized = firstLetter.toUpperCase() + restOfTheWord;
    return capitalized;
};

export const reverseString = ()=>{};