// Write a function to create the following output : [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]

const formatArray = (array) => {
	const arrayData = []
	for(let i=1; i<=array.length; i=i+3){
		const subArray = []
		for(let j=i; j<i+3 && j<=array.length; j++) {
			subArray.push(j)	
		}
		arrayData.push(subArray)
	}
	console.log(arrayData)
	// return arrayData;
}

var a = [1,2,3,4,5,6,7,8,9,10,11,12,13]

formatArray(a)


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

// console.log(updateArray(a))