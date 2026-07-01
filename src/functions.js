export const capitalize = (word)=>{
    const firstLetter = word[0];
    const restOfTheWord = word.slice(1);
    const capitalized = firstLetter.toUpperCase() + restOfTheWord;
    return capitalized;
};

export const reverseString = (word) => {
    let reversedWord = "";
    for(let i = word.length; i > 0; i -= 1){
        reversedWord += word[i-1];
    }
    return reversedWord;
};