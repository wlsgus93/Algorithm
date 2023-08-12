// https://www.acmicpc.net/problem/8393
// n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

var fs = require('fs');
var input = fs.readFileSync('./backjoon/test/8393.txt').toString()
let data=Number(input)
for (let i=data-1; i>0;i--)
{
    data+=i;
}
console.log(data)


//shortcoding 수학공식
// process.stdin.on('data',n=>console.log(n*++n/2))