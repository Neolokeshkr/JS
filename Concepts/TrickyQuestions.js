// To know exactly what a variable is 

    Object.prototype.toString.call({})  // returns '[object Object]'

    Object.prototype.toString.call([])  // returns '[object Array]'

//  Hoisting
    // Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their respective scopes during the compilation phase, before the actual code execution.

    // This means that you can use variables and functions before they are declared in the code, without encountering an error. However, it's important to understand that only the declarations are hoisted, not the initializations or assignments.

    // However, it's crucial to note that only declarations are hoisted, not the function expressions:

        sayHi(); // TypeError: sayHi is not a function
        var sayHi = function () {
          console.log("Hi");
        };
        
// Prototypical Inheritence
    // When you try to access a property or method on an object, JavaScript first looks for the property or method in the object itself. If it doesn't find it there, it goes up the prototype chain and looks in the prototype object. This process continues until it finds the property or reaches the end of the prototype chain (when the [[Prototype]] is null).