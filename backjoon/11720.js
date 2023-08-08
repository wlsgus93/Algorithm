// https://www.acmicpc.net/problem/11720
// 숫자의 합

var fs = require('fs');
var input = fs.readFileSync('./backjoon/test/11720.txt').toString().split('\n');
let summary=0;
for (let i of String(input[1]))
{
    summary+=parseInt(i)
}
console.log(summary)




//shortcut
// for(n of `${require('fs').readFileSync(m=0)}`.split`
// `[1])m+=+n
// console.log(m)
