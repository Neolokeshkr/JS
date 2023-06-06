// promise
// 1. Promise is created using new keyword
// 2. It takes an anonymous function haiving (resolve, reject) as an argument
// 3. when a promise is called it either gets resolved or rejected.
// 4. Promsies were made to replace the callbacks 

// Examples
/* let p = new Promise((resolve, reject) => {
    let sum = 1 +1;
    if(sum == 2){
        resolve("Success");
    } else {
        reject("Failed");
    }
})

p.then((message) => {
    console.log("Promise resloved : " + message);
}).catch((message) => {
    console.log("Promise rejected : " + message)
}) */

// Promise using setTimeout()
let timeoutId = setTimeout(() => console.log('Timeout'), 1000);
// clearTimeout(timeoutId);
// console.log(timerId);

// setTimeout(() => {
//     console.log("Delayed for 1 second.");
//   }, 1000);

setTimeout(() => console.log('Timeout'), 100);


const myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
    console.log(arguments.length > 0 ? this[sProperty] : this);
};

// console.log('myArray',myArray);

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"