/* Q2: Given a string, reverse each word in the sentence */

let input = 'this is a react js interview';

function revreseString(string){
	// Solution 1 : Using Map Function
	let splitWords = string.split(' ')
	  let reversedWords =  splitWords.map( word => word.split('').reverse().join(''));
	  
	  return reversedWords.join(' '); 
     
    
	// Solution 2: Short but complex
    // return string.split('').reverse().join('').split(' ').reverse().join(' ');
}

console.log(revreseString(input));