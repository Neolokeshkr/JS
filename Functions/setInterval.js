// setInterval(code||functionRef, delay, arg1, , , ,argn )
    // 1. The setInterval method repetedly calls the function with a fixed time delay between each call.
    // 2. setInterval returns a positive intervalId which identifies the timer created by the call to setInterval - this intervalId can be passed to clearInterval(intervalId) to clear/end the timeout.
    // 3. A common example is of flashing text with different colors.

    let intervalId = setInterval(() => {
        console.log('Function Called');
        clearInterval(intervalId);
    }, 1000);