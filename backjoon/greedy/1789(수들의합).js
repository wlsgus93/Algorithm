// https://www.acmicpc.net/problem/1789
// 서로 다른 N개의 자연수의 합이 S라고 한다. S를 알 때, 자연수 N의 최댓값은 얼마일까?
var fs = require('fs');
var input = fs.readFileSync('./backjoon/test/1789.txt').toString().split('\n').map(Number);
let S= input[0];
let N = 1; // N의 초기값을 1로 설정
let sum = 0; // 합계 초기값

while (true) {
  sum += N; // 1부터 N까지의 합을 구함
  if (sum > S) {
    // 합계가 S를 초과하면 N-1이 정답
    console.log(N - 1);
    break;
  }
  N++;
}