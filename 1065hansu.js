let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(line) {
    let n = Number(line);
    
    function x(n) {
        let count = 0;
        for(let i = 1; i <=n; i++) {
            if(i < 100) {
                count++;
            } else {
                i = String(i);
                if(i[0]-i[1] === i[1]-i[2]) {
                    count++;
                }
            }
        }
        return count;
    }
    
    console.log(x(n));
    
}).on('close', function() {
    process.exit();
});

//문제

/* 어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다. 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다. 
N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오. */

//한수 정의

// 1자리수(1~9)인 경우 -> 자릿수가 하나이므로 무조건 한수
// 2자리수(10~99) -> 자릿수가 2개, 연속된 두 수의 차 쌍이 하나이므로,한수
// 3자리수(100~999) -> 백의자리,십의자리,일의자리 추출한 후, (a-b === b-c)가 true면 한수
