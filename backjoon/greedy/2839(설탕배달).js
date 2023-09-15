// https://www.acmicpc.net/problem/2839
// 첫째 줄에 N이 주어진다. (3 ≤ N ≤ 5000)

// 상근이가 배달하는 봉지의 최소 개수를 출력한다.
//  만약, 정확하게 N킬로그램을 만들 수 없다면 -1을 출력한다.
// 단순히 나머지 나누기로 풀면안된다. 고민하기 최적해? 가능한..
// 최적해? 한조건의 max는 min
let fs = require('fs');
let input = fs.readFileSync('./backjoon/test/2839.txt').toString().split('\n');
let weight=Number(input);
let result=0;
let isOk=true;
while(weight>=0){
  if(weight%5==0 || weight==0){
    result+=parseInt(weight/5);
    isOk=false;
    break;
  }
  weight-=3;
  result+=1;
  if (!isOk)
  {
    result=-1;
  }
}
console.log(result)