let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(line) {
    let lower = line.toLowerCase(); //입력받은 알파벳 소문자 변환
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    let result = ""; //index값 저장
    
    for(let i = 0; i < alphabet.length; i++) {
        result += lower.indexOf(alphabet[i]) + " ";
    }
    
    console.log(result);
}).on('close', function() {
    process.exit();
});