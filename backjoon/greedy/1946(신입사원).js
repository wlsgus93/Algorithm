// https://www.acmicpc.net/problem/1946
// 첫째 줄에는 테스트 케이스의 개수 T(1 ≤ T ≤ 20)가 주어진다. 각 테스트 케이스의 첫째 줄에 지원자의 숫자 N(1 ≤ N ≤ 100,000)이 주어진다.
// 둘째 줄부터 N개 줄에는 각각의 지원자의 서류심사 성적, 면접 성적의 순위가 공백을 사이에 두고 한 줄에 주어진다. 
// 두 성적 순위는 모두 1위부터 N위까지 동석차 없이 결정된다고 가정한다.

// 내 전략: 각분야의 1등 선택, 1등 말고 다른 성적의 등수보다 낮은사람 다 자름

var fs = require('fs');
var [testCase,...input] = fs.readFileSync('./backjoon/test/1946.txt').toString().split('\n');
console.log(testCase)
console.log(input)
let index=0;
for (let i=0; i<testCase;i++){
  console.log('check1')
  for (let j=index;j<index+parseInt(input[(index)]);j++){
    // console.log(j)
    console.log(input[j+1])
    console.log('index:'+index)
  }
  console.log('index:'+index)
}