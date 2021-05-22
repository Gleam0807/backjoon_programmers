const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {

    const Test = +input[0];

    for (let i = 0; i < Test; i++) {
        let result = '';
 
        const R = +input[i + 1].split(' ')[0];
    
        const S = input[i + 1].split(' ')[1];
        for (let j = 0; j < S.length; j++) {
        
            loop += S.split('')[j].repeat(R);
        }
        console.log(loop);
    }

    process.exit();
});