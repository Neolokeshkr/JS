// promise
    1. Promise is created using new keyword
    2. It takes an anonymous function haiving (resolve, reject) as an argument
    3. when a promise is called it either gets resolved or rejected.
    4. Promsies were made to replace the callbacks 

// Examples
    let p = new Promise((resolve, reject) => {
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
    })