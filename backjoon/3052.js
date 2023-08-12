// https://www.acmicpc.net/problem/3052'
// 나머지 
// 서로 다른 나머지 갯수 구하기

let fs = require('fs');
let input = fs.readFileSync('./backjoon/test/3052.txt').toString().trim().split('\n').map(Number);
let answer= new Set(input.map((a)=>a%42))
console.log(answer.size)