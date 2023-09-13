const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter Data: ', (inputs) => {
    console.log(inputs)
    rl.close();
})

rl.on('line', (line) => {  s_input += line;});

rl.on('close', () => {})
