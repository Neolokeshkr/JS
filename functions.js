console.log("Hello world");
function outside(){
	let a = 10;
	var b = 15;


	function inside(){
		let c = 20;
		let d = 45;
	//	return [console.log(a),console.log(b)]
		console.log(a);
		console.log(b);
		}

	inside();
	
	//	console.log(c);
	//	console.log(d);
}
outside();	
console.log("Poll SCM git sucessfull on jenkins");
console.log("Newly added line of code");
