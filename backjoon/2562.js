// https://www.acmicpc.net/problem/2562
// 최댓값
// 최댓값및 몇번째수인지 출력

let fs = require('fs');
let input = fs.readFileSync('./backjoon/test/2562.txt').toString().split('\n').map(Number);
console.log(Math.max(...input)+'\n'+(Number(input.indexOf(Math.max(...input)))+1))