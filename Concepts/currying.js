// currying  
//     1. transforms a function having mutiple arguements into a sequence of nesting functions.
//     2. The nexted functions tak only one arguement at a time.
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
