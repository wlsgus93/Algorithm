//기능: 전체 텍스트를 읽어 온 뒤에, 줄바꿈 기호를 기준으로 구분하여 리스트로 변환하기
// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기

// readfilesynce ==> 파일 동기로적으로 파일 읽기

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync('jsbasic/test.txt').toString().split('\n');

console.log(input)

// ['1', '2', '3 4 5 6'] 로 출력



/* readline */
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let result = [];
rl.on('line', function (line) {
    // 콘솔 입력 창에서 줄바꿈(Enter)를 입력할 때마다 호출
    result.push(line);
}).on('close', function () {
    // 콘솔 입력 창에서 Ctrl + C 혹은 Ctrl + D를 입력하면 호출(입력의 종료)
    console.log(result);
    process.exit();
});



