// https://www.acmicpc.net/problem/10818
// 최소, 최대

let fs = require('fs');
let [n,input] = fs.readFileSync('./backjoon/test/10818.txt').toString().split('\n');
input = input.split(' ').map(Number)
let answer=Math.min(...input)+' '+Math.max(...input)
console.log(answer)