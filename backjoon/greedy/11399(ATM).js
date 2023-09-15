// https://www.acmicpc.net/problem/11399
// ATM
// 첫째 줄에 사람의 수 N(1 ≤ N ≤ 1,000)이 주어진다. 둘째 줄에는 각 사람이 돈을 인출하는데 걸리는 시간 Pi가 주어진다. (1 ≤ Pi ≤ 1,000)
var fs = require('fs');
var [input,scores] = fs.readFileSync('./backjoon/test/11399.txt').toString().split('\n');
scores=scores.split(' ').map(Number);
scores=scores.sort((a,b)=>a-b)
let sum=0;
let cur=0;
for (let i=0; i<input;i++){
  cur+=scores[i];
  sum+=cur;
}
console.log(sum);
