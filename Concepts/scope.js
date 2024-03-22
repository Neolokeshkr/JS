// var scopeFunction = function () {
//     var a = 1;
//     var b = 1;
//     var c = 1;
// };
// console.log('a', a);
// console.log('b', b);
// console.log('c', c);

/* -------------------------------------- */

// Code
console.log(x)
const x = 2;      // Return Value - undefined

// Explanation:
/* 
    1. variables declared with var are hoisted to top of their fn or global scope. But only declerations are hoisted not the initialisation
    2. During compilation phase the code is intterpreted as following:
        var x;
        console.log(x)
        x = 2
    3. During Execution phase the second line attempts to log the value of x, which has been declared but not initialised yet, Hence giving undefined.
    4. This behaviour is only specific to variables declared with var, if it would have been declared with let or const, it should have given ReferenceError

*/
