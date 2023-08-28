// Palindrome Number

    function isPalindrome(num){
     let number = String(num)  ;

     return number === number.split('').reverse().join('') ? `Number : ${number} is palindrome`  : `Number : ${number} is not palindrome` ;
    }

    // console.log(isPalindrome(122231));

// Missing Number - Find missing integer number from an array 

    function missingNaturalNumber(arr){
        let missingNumber = arr.sort((a,b) => a-b).find((ele,ind) => ele !== ind + 1)
        return missingNumber ? missingNumber -1 : null
    }

    // console.log(missingNaturalNumber([1,2,3,4,5,7,8,9]))
    // console.log(missingNaturalNumber([1,9,2,8,7,6,3,5,10,]))


// Fibonacci Series

    function printFibonacciSeries(numTerms){
        if(numTerms <= 0){
            return []
        } else if(numTerms === 1){
            return [0]
        } else if(numTerms === 2){
            return [0,1]
        }

        const series = [0,1]
        for( let i = 2; i < numTerms; i++){
            series.push(series[i-2] + series[i-1])
        }

        return series;
    }

    // console.log(printFibonacciSeries(10));

//  For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; for multiples of both 3 and 5, print "FizzBuzz".

// call apply and bind
    let obj = {
       name: 'Lokesh',
       job: 'Engineer',
       printObj: function(){
           return `${this.name} is an ${this.job}`
       }
    }

    function printObject(city){
       return `${this.name} is an ${this.job} from ${city}`
    }

    let callFunction = printObject.call(obj,'Delhi');
    // console.dir(callFunction);


    // apply
    // console.dir(printObject.apply(obj,['Tokyo']));

    //  bind
    let bindFunction = printObject.bind(obj,'Mumbai');
    // console.dir(bindFunction)


// Currying

    function sum(a){
        return (b) => {
            return (c) => {
                return a+b+c
            }
        }
    }

    console.log(sum(1)(2)(3))

    function multiply(x){
        return y => x*y
    }

    multiply(2)(2)
