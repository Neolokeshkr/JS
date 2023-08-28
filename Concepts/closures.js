// closures
    // 1. A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
    // 2. a closure gives you access to an outer function's scope from an inner function.
    // 3. In JavaScript, closures are created every time a function is created, at function creation time.

// Examples
    function init(){
        let name = "Lokesh";
        function displayName(){ // inner function that forms the closure
            console.log(name); // name variable is declared in outer function
        }
        displayName();
    }

    init();

    function outerFunction(){
        let outerVariable = 10;

        function innerFunction(){
            console.log(outerVariable)
        }

        return innerFunction
    }

    let closureFunction = outerFunction()
    closureFunction();