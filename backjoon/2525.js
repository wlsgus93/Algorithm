// https://www.acmicpc.net/problem/2525
// 오븐 시계
// 훈제오리구이를 시작하는 시각과 오븐구이를 하는 데 필요한 시간이 분단위로 주어졌을 때, 
// 오븐구이가 끝나는 시각을 계산하는 프로그램을 작성하시오.

var fs = require('fs');
var input = fs.readFileSync('./backjoon/test/2525.txt').toString().split('\n');
var [a,b] = input[0].split(' ').map(Number)
var c= Number(input[1])
let answer=(a*60+b+c)%1440 // 하루가 넘어갈 경우 24>hour

console.log(parseInt(answer/60)+' '+answer%60)

