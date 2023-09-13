// currying  
//     1. transforms a function having mutiple arguments into a sequence of nesting functions.
//     2. The nested functions take only one arguement at a time.
//     3. Currying helps you avoid passing the same variable again and again.
//     4. It helps to create a higher order function.


// Examples
    function sum(a){
        return (b) => {
            return (c) => {
                return a+b+c
            }
        }
    }
    console.log(sum(1)(2)(3));

    function curriedMultiply(x) {
        return (y) => {
            return x*y
        }
    }
    console.log(curriedMultiply(4)(5));
    console.log(curriedMultiply(4));



    let a=[1,2,3,4,5,6,7,8,9,10]

//output : [1,2,3],[4,5,6],[7,8,9],[10]

function splitArray(array){
	let newArray = []
  
	 for(i=0; i<array.length; i=i+3){
   let subArray = []
   	for(k=i; k<i+3 && i<array.length; k++){
    	subArray.push(array[k])
    }
    newArray.push(subArray)
   }
   return newArray;
}

console.log(splitArray(a))

// Curried Sum witb number of elements
function curriedSum(n) {
    if (n === 0) {
      return 0; // Base case: when no more numbers are left to sum
    } else {
      // Return a function that takes the next number and continues the sum
      return function(nextNumber) {
        return curriedSum(n - 1) + nextNumber;
      };
    }
  }
  