// promise
// 1. Promise is created using new keyword
// 2. It takes an anonymous function having (resolve, reject) as an argument
// 3. when a promise is called it either gets resolved or rejected.
// 4. Promsies were made to replace the callbacks 

// Examples
/* let p = new Promise((resolve, reject) => {
    let sum = 1 +1;
    if(sum === 21){
        resolve("Success");
    } else {
        reject("Failed");
    }
})

p.then((message) => {
    console.log("Promise resloved : " + message);
}).catch((message) => {
    console.log("Promise rejected : " + message)
})  */

// Promise using setTimeout()
// let timeoutId = setTimeout(() => console.log('Timeout'), 1000);
// clearTimeout(timeoutId);
// console.log(timerId);

// setTimeout(() => {
//     console.log("Delayed for 1 second.");
//   }, 1000);

// setTimeout(() => console.log('Timeout'), 100);


// const myArray = ["zero", "one", "two"];
// myArray.myMethod = function (sProperty) {
//     console.log(arguments.length > 0 ? this[sProperty] : this);
// };

// console.log('myArray',myArray);

/* myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one" */

// Network Call using promises

    // const promise = new Promise((resolve, reject) => {
    //     let data = 'Promise Success';
    //     setTimeout(() => {
    //         data === 'Promise Success'  ? resolve(data) : reject('Promise rejected')
    //     }, 2000);
    // })

    // promise
    //     .then((data) => console.log(data))
    //     .catch(err => console.log(err))

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //         .then((response) => { 
    //             if (!response.ok) {
    //                 console.log(response.statusText);
    //                 throw new Error('Network response was not ok');
    //             }
    //             console.log(response.statusText);
    //               return response.json();
    //             //   return response.text();
    //             return response.blob();
    //         })
    //         .then( data => console.log(data))
    //         .catch((err) => console.log('Error', err));
        
    /* Understanding Promises */

    console.log('before promise')

    setTimeout(() => {
        console.log('Set Timeout')
    }, 100)

    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let randomNumber = Math.random()

            randomNumber > 0.5 ? resolve('Heads') : reject('Tails')
        }, 0)
    })

    p.then((result) => {
        console.log('Heads')
    })
    .catch((error) => {
        console.log('Error:', error)
    })

    console.log('after promise')

    /* Simulating Fetch Call using promises */

    const fetchData = new Promise((res, rej) => {
        
    })
