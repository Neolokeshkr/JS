// Some Tricky Questions using setTimeout

    // 1. What would be the output of the following function and why?

        function tellOutput(){
            for (let index = 0; index < 10; index++) { //what if i is declared using var
                setTimeout(() => {
                    console.log(index)
                }, 1000);
            }
        }
        tellOutput();

        // Explanation:
        // using let : 
            // Output 0 1 2 3 4 5 6 7 8 9
            // i is declared using let which has block scope so the setTimeout callback function captures i at every iteration.
        // using var : 
            // Output 10 10 10 10 10 10 10 10 10 10
            // i is declared using var which has functional scope so the valie of i remains same for every setTimeout callback function.
            // When the first setTimeout runs after a delay of 1 second. the loop has already ended and i has been assigned with a value of 10.