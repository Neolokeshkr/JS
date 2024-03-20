// closures
// 1. A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
// 2. a closure gives you access to an outer function's scope from an inner function.
// 3. In JavaScript, closures are created every time a function is created, at function creation time.

// Examples
function init() {
    let name = "Lokesh";
    function displayName() { // inner function that forms the closure
        console.log(name); // name variable is declared in outer function
    }
    displayName();
}

init();

/* ------------------------------- */

function outerFunction() {
    let outerVariable = 10;

    function innerFunction() {
        console.log(outerVariable)
    }

    return innerFunction
}

let closureFunction = outerFunction()
closureFunction();

// Explanation:
/* 
    1. Here the innerFunction is being returned from the outerFunction before being executed.
    2. The reason that this code works is that function in js form closures.
    3. Closure is a combination of function and the lexical environment in which they were declared
    4. This lexical environment consists of any local variables that were in-scope at the time closure was created.
*/

/* ------------------------------- */

//  Make adder function

function makeAdder(x) {
    return function (y) {
        return x + y
    }
}

const add5 = makeAdder(5)
const result = add5(5)

console.log(result)

/* ------------------------------- */

// Closure scope chain

/* 
    1. Every closure has three scopes
        1. Local Scope (Own Scope)
        2. Enclosing Scope
        3. Global Scope
*/

const e = 10;
function sum(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                return a+b+c+d+e
            }
        }
    }
}

console.log(sum(1)(2)(3)(4))
