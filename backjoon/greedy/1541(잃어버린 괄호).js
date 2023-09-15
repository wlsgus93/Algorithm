// https://www.acmicpc.net/problem/1541
// 첫째 줄에 식이 주어진다. 식은 ‘0’~‘9’, ‘+’, 그리고 ‘-’만으로 이루어져 있고, 
// 가장 처음과 마지막 문자는 숫자이다. 
// 그리고 연속해서 두 개 이상의 연산자가 나타나지 않고, 
//  5자리보다 많이 연속되는 숫자는 없다. 수는 0으로 시작할 수 있다.
//  입력으로 주어지는 식의 길이는 50보다 작거나 같다.
var fs = require('fs');
var input = fs.readFileSync('./backjoon/test/1541.txt').toString().split('\n')
let sum = 0;
let group = input[0].split('-');
for (let i=0;i<group.length;i++){
  let cur2= group[i].split('+').map(Number).reduce((a, b)=>a+b);
  if(i==0)
  {
    sum+=cur2
  } else {
    sum-=cur2
  }
}
console.log(sum);