// https://www.acmicpc.net/problem/1546
// 평균
// 모든 점수를 점수/M*100으로 고친 후 새로운 평균 산출

var fs = require('fs');
var [input,scores] = fs.readFileSync('./backjoon/test/1546.txt').toString().split('\n');
let students=Number(input)
let list=scores.split(' ').map(Number)
let sum=list.reduce((a,b)=>a+b)
let max=Math.max(...list)

console.log(sum/max*100/students)

// let exa=list.reduce((a,b)=>a+b)/students

// shortcodding
// process.stdin.on('data',b=>{[l,s]=`${b}`.trim().split`
// `;s=s.split` `;console.log(100*s.reduce((a,b)=>a- -b)/Math.max(...s)/l)})