
/*Q. What is a callback function give an example
  1. Function being passed to another function as an argument and is executed after some operation has been completed.
 */
 
 /* Example: */
 
 function modifyArray(arrayElement, array , displayArrayCallback){
    array.push(arrayElement)
    displayArrayCallback();
}

let arr = [1,2,3,4]
modifyArray(5, arr, function() {
    console.log('Array has been modified',arr )
});