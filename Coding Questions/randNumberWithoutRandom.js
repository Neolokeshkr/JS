function getRandomNumber(min, max){
 let minValue = min;
 let maxValue = max;
 
    let rN = Date.now().toString();
    let value = () => rN.slice(rN.length - max.toString().length, rN.length - min.toString().length)

    // console.log(rN.length - min.toString().length)
    // console.log(rN.length - max.toString().length)
    // console.log(min.toString().length);
    // console.log(max.toString().length);
// 
    let random = value();
    while(random > min && random > max){
        random = value();
    }

    console.log(random);
    return rN;

}

console.log(getRandomNumber(1,100));