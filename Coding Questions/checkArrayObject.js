/* Check if an object is an array */

function checkArray(inputObject){
  if(Object.prototype.toString.call(inputObject) === '[object Array]' ){
    return `${inputObject} is an array`
  } else {
  	return `${inputObject} is not an array`
  }
}

console.log(checkArray([1,2,3]))

console.log(Object.prototype.toString.call(NaN));