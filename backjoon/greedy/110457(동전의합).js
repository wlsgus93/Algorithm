// https://www.acmicpc.net/problem/11047
// 동전의합
// 첫째 줄에 N과 K가 주어진다. (1 ≤ N ≤ 10, 1 ≤ K ≤ 100,000,000)
// 둘째 줄부터 N개의 줄에 동전의 가치 Ai가 오름차순으로 주어진다. (1 ≤ Ai ≤ 1,000,000, A1 = 1, i ≥ 2인 경우에 Ai는 Ai-1의 배수)


var fs = require('fs');
var [input,...scores] = fs.readFileSync('./backjoon/test/110457.txt').toString().split('\n');
let [n,k] = input.split(' ').map(Number); // 동전의 갯수, 동전의 합
scores=scores.map(Number);
let count=0;

for (let i=n-1; i>=0; i--){
  count += parseInt(k/scores[i]);
  k%=scores[i];
  console.log(i);
}
console.log(count);