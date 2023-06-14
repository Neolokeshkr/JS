// Destructuring
    // The destructuring syntax is a javascript expression. That make unpacking values from arrays, or properties from object into dsistinct variables.
    // Syntax
    let a, b, rest;
    [a,b] = [10, 20];

    [a,b, ...rest] = [10, 20, 30, 40, 50];
    console.log('a',a);
    console.log('b',b);
    console.log('rest',rest);