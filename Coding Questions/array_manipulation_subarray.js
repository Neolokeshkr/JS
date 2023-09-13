// Write a function to create the following output : [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]

const a = [1,2,3,4,5,6,7,8,9,10]

function updateArray(array){
	let newArray = [];
  for(let i=0; i<array.length; i=i+3){
  		let subArray = [];
  	  for( let k=i; k<i+3; k++){
  	          if(array[k]){
  	            subArray.push(array[k])
  	          }
  	        }
      newArray.push(subArray);
  }
  return newArray
}

console.log(updateArray(a))