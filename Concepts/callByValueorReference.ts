// JavaScript is call-by-value. However, it's essential to understand how this term applies in the context of JavaScript, as it can be a bit confusing.

interface UserObj {
    name: string
  }
  
  // Call by value

  // In JavaScript, when you pass a primitive value (e.g., a number, string, boolean) to a function, it's passed by value. This means that a copy of the value is created inside the function, and any changes made to that value inside the function do not affect the original value outside the function.


  function changeValue(val: number){
    val = 10;
  
    return val
  }
  
  let num = 50;
  
  console.log(num) //50
  console.log(changeValue(num)) //10
  console.log(num) // 50
  
  // Call by reference

  // On the other hand, when you pass an object (including arrays and functions) to a function, it's passed by reference. This means that the function receives a reference to the original object, and any modifications made to the object inside the function will affect the original object outside the function.

  function modifyObject(obj: UserObj) {
    obj.name = 'Lokesh'
  
    return obj
  }
  
  let obj: UserObj = {
    name: 'Anku'
  }
  
  console.log(obj) // { name: 'Anku' }
  console.log(modifyObject(obj)) // { name: 'Lokesh' }
  console.log(obj) // { name: 'Lokesh' }