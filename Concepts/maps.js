// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

function hasDuplicte(arr){
    const occuranceMap = new Map();

    for ( num of arr ){
        if(occuranceMap.has(num)){
            occuranceMap.set(num, occuranceMap.get(num) + 1)
        } else {
            occuranceMap.set(num,1)
        }
   }

    for([num, count] of occuranceMap){
        console.log(num,count)
    }

    console.log(occuranceMap.size)
}

console.log(hasDuplicte([1,2,3,4,5,5,4,3,2]));