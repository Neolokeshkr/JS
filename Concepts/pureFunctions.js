// pureFunctions
//     1. Pure functions are functions which don't produce side effects.
//     2. A pure function in JavaScript is a function that returns the same result if the same arguments(input) are passed in the function.
//     3. It should not modify any non-local state.
//     4. These functions are ot dependent on any global/non-local value

// Examples
    function addition(x,y){
        return x+y;
    }
    console.log(addition(1,3));
