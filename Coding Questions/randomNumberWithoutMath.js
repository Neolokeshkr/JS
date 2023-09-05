//  Program to print a random number between a range without using Math Object
function printRandomNumer(min, max){
    let timeStamp = Date.now();
    let range = max - min  + 1;
    let randomNumber = timeStamp%range + 1;

    return randomNumber;
}

 console.log(printRandomNumer(1,89));

//  Using Random Number
console.log(Math.floor(Math.random() * (6 - 1) + 1));