let input = '   this is a react js interview  ';
// expected output = 'This Is A React Js Interview'


function toUpperCaseFirstLetter(string){
    let splitWords = string.trim().split(' ')
    let formattedString = splitWords.map( word => word[0].toUpperCase() + word.slice(1)).join(' ');
    
    return formattedString;
}

console.log(toUpperCaseFirstLetter(input));



function toUpperCaseLastLetter(string){
    let splitWordsArray = String(string).trim().split(' ')
    let newArray = splitWordsArray.map(word => word.slice(0,word.length-1) + word[word.length -1].toUpperCase()).join(' ');
    return newArray
}

console.log(toUpperCaseLastLetter(input))