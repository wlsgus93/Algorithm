// https://www.acmicpc.net/problem/1946
// 첫째 줄에는 테스트 케이스의 개수 T(1 ≤ T ≤ 20)가 주어진다. 각 테스트 케이스의 첫째 줄에 지원자의 숫자 N(1 ≤ N ≤ 100,000)이 주어진다.
// 둘째 줄부터 N개 줄에는 각각의 지원자의 서류심사 성적, 면접 성적의 순위가 공백을 사이에 두고 한 줄에 주어진다. 
// 두 성적 순위는 모두 1위부터 N위까지 동석차 없이 결정된다고 가정한다.

// 내 전략: 각분야의 1등 선택 인원 , 1등말고 다른 분야의 성적의 등수보다 낮은사람 다 Cut! 고민하기
// 평가: 처음 내 전략은 맞았지만, 구현 방법 로직에서 잘못됌(filter or MIN??), 1등 기준이라 1등자체만 기민하게 생각함..
// 느낀점: 굳이 배열로 결과물을 만들 필요는 없다 내가 필요한건 단순한 신입사원수(Count)일뿐...정확하게 다 MAKING NO!!
// 메모리: 450156kb	 시간 3956ms
var fs = require('fs');
var [testCase,...input] = fs.readFileSync('./backjoon/test/1946.txt').toString().split('\n');
let index=0;
for (let i=0; i<testCase;i++){
  let curNumber=Number(input[index]);
  let temp=[]
  for (let j=index+1;j<index+curNumber+1;j++){
    temp.push((input[j].split(' ').map(Number)));
  }
  temp.sort((a,b)=>a[0]-b[0])
  let count=0
  let min=100001;
  for (let el of temp){
    if(el[1]<=min){
      count+=1
      min=el[1]
    }
  }
  index+=curNumber+1;
  console.log(count) 
}