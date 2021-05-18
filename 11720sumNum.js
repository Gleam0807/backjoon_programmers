let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let data = [];

rl.on('line', function(line) {
    data.push(line);
}).on('close', function () {

    const Num =+ data[0];

    let sum = 0;
    for (let i=0; i< Num; i++){
        sum += +data[1].split('')[i];
    }

    console.log(sum);

    process.exit();
});