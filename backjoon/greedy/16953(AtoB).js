// https://www.acmicpc.net/problem/16953
// 정수 A를 B로 바꾸려고 한다. 가능한 연산은 다음과 같은 두 가지이다.

// 2를 곱한다.
// 1을 수의 가장 오른쪽에 추가한다. 
// A를 B로 바꾸는데 필요한 연산의 최솟값을 구해보자.
let fs = require('fs');
let [a,b] = fs.readFileSync('./backjoon/test/16953.txt').toString().split(' ').map(Number);
let isOk=false;
let count=0;
while(b>a){
  console.log('a:'+a+' '+'b:'+b)
  if(b%10==1)
  {
    b=parseInt(b/10)
    count+=1;
    if(a==b)
    { 
      isOk=true;
      console.log('count1: '+(count+1));
      break
    }
  }
  else if(b%2===0){
    count+=1;
    b=parseInt(b/22);
    if(a==b)
    {
      console.log('count2: '+(count+1));
      isOk=true;
      break;
    }
  }
  else{
    console.log('else check')
    break;
  }
}
if(!isOk){
  console.log(-1);
}