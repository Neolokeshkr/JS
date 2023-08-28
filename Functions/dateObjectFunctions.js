// Date object methods
    
    // 1. new Date() - The Date() constructor creates Date objects. 
        console.log(`\n--------------\n`)

        let date = new Date()
        console.log(`new Date() :\nReturns:${typeof(date)}\n`,date);

        console.log(`\n--------------\n`)

    // 2. Date() constructor only - When called as a function, it returns a string representing the current time.
        let onlyDateConstructor = Date()
        console.log(`Date() :\nReturns:${typeof(onlyDateConstructor)}\n`, onlyDateConstructor);

        console.log(`\n--------------\n`)

    // 3. Date.now() - Returns the current timestamp in milliseconds since epoch.
        let dateNow = Date.now();
        console.log(`Date.now() :\nReturns: ${typeof(dateNow)}\n`,dateNow)
    
        console.log(`\n--------------\n`)

    // 4. Date.parse() - Parses a string represntaion of date and returns timestamp
        let dateParse = Date.parse()
        console.log(dateParse)