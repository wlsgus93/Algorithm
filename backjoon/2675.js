// https://www.acmicpc.net/problem/2675
// 문자열 반복
// 문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오. 
// 즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. S에는 QR Code "alphanumeric" 문자만 들어있다.

// QR Code "alphanumeric" 문자는 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\$%*+-./: 이다.

var fs = require('fs');
var [input,...arr] = fs.readFileSync('./backjoon/test/2675.txt').toString().split('\n')


console.log(arr)
console.log(Number(input))
for (let i=0; i<Number(input);i++){
    let answer=''
    let [r,s]=arr[i].split(' ')
    for (let j=0; j<=s.length;j++)
    {
        answer+=s.charAt(j).repeat(r)
    }
    console.log(answer)
}

