/* Empty an array */

let arr = [1,3,4,5];

/* Solution 1. By using while loop  */
function emptyArray(array){
	while(array.length !== 0){
  	array.pop()
  }
  
 	return array;
}
// console.log(emptyArray(arr));

/* Solution 2. By reassigning the array with an empty [] */
/* arr = []
console.log(arr); */

/* Solution 3. By using splice method */
function emptyArrayBySplice(array){
	array.splice(0,array.length);
  return array;
}
/* console.log(emptyArrayBySplice(arr)); */

/* Solution 4. By assigning array.length = 0 */
arr.length = 0;
/* console.log(arr); */