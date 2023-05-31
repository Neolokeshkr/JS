let input = 'this is a react js interview';
// expected output = 'This Is A React Js Interview'


function formatString(string){
    let splitWords = string.split(' ')
    let formattedString = splitWords.map( word => word[0].toUpperCase() + word.slice(1)).join(' ');
    
    return formattedString;
}

console.log(formatString(input));