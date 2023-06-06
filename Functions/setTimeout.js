// setTimeout(code || functionRef, delay)
    // 1. delay gets implicitly coerced into a number, the below example works even if a string is passed in delay.
    // 2. setTimeout returns a positive timeoutId which identifies the timer created by the call to setTimeout - this timeoutId can be passed to clearInterval(timeoutId) to clear/end the timeout.
    // 3. setTimeout delays the execution of the function until the delay is expired.
    // 4. setTimeout is an asyncronous functions, it does not pause the execution of other functions.

    let timeoutId = setTimeout(() => console.log('Timeout: delay passed as string "100"'), "100");

    // clearInterval()

    let timeoutId2 = setTimeout(() => console.log('Timeout 2'), 1000);
    clearInterval(timeoutId2);

    // Multiple Timeouts
    let t1 = setTimeout(() => console.log('Timeout : 5 secs'), 5000);
    let t2 = setTimeout(() => console.log('Timeout : 3 secs'), 3000);
    let t3 = setTimeout(() => console.log('Timeout : 1 secs'), 1000);


