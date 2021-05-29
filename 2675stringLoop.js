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

// 문제
/* 문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오. 즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. 
S에는 QR Code "alphanumeric" 문자만 들어있다
*/
