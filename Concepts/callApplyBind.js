let object = {
    firstName : "Lokesh",
    lastName : "Kumar"
}

function printFullName(city,state){
    console.log(this.firstName+" "+this.lastName+" from "+city+" "+state);
}

// call - concept of function borrowing
    // To call any function on any said object.
    printFullName.call(object);
    printFullName.call(object,"Delhi","India");

// apply - concept of function borrowing
    // function parameters are passed in as Array list
    printFullName.apply(object,["Mumbai","Maharashtara"]);

// bind - returns the functions along with the obects
    // Helps to bind a function with any object and funcion parameters.
let bindFunction = printFullName.bind(object,"Hyd","KA");
console.log(bindFunction);
bindFunction();

let object2 = {
    firstName : "Ankur",
    lastName : "Pandey"
};

printFullName.bind(object2,"Kotdwar","Uttrakhand")();
