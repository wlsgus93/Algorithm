// https://www.acmicpc.net/problem/13305
// 표준 입력으로 다음 정보가 주어진다. 첫 번째 줄에는 도시의 개수를 나타내는 정수 N(2 ≤ N ≤ 100,000)이 주어진다.
//  다음 줄에는 인접한 두 도시를 연결하는 도로의 길이가 제일 왼쪽 도로부터 N-1개의 자연수로 주어진다.
//  다음 줄에는 주유소의 리터당 가격이 제일 왼쪽 도시부터 순서대로 N개의 자연수로 주어진다. 
// 제일 왼쪽 도시부터 제일 오른쪽 도시까지의 거리는 1이상 1,000,000,000 이하의 자연수이다. 
// 리터당 가격은 1 이상 1,000,000,000 이하의 자연수이다. 
// 내 초기 전략: 제일싸면 나머지거리 모두 구입, 아니면 다음 노드 갈수 있는만큼만
// 느낀점: 부분집합을 생각 못했음.. 753423 일 경우 75(33)22 가아니라 75(34)22로 코딩됌..
// 느낀점2: bigint의 사용법, 코드 최적화(MIN의 변수 개수 여러개..)
var fs = require('fs');
var [cities, rodes, oil] = fs.readFileSync('./backjoon/test/13305.txt').toString().split('\n');
rodes=rodes.split(' ').map(BigInt);
oil=oil.split(' ').map(BigInt);
let payment=BigInt(0);
let minValue=oil[0];
for (let i=0; i<cities-1;i++)
{
  minValue=BigInt(Math.min(Number(minValue),Number(oil[i])));
  payment+=rodes[i]*minValue;
}
console.log('last payment:'+payment)




// 처음 풀이
// console.log('totalRodes:'+leaves)
// console.log('min:'+min)
// console.log(rodes)
// console.log(oil)

// for (let i=0; i<cities-1; i++){
//   console.log(i)
//   if(oil[i]===min) //현재 위치가 가장 쌀 때
//   {
//     payment+=leaves*oil[i];
//     leaves=0;
//     console.log('leaves:'+leaves)
//     break;
//   }
//   else{  //가장 싸지 않을때 다음도시 갈수있는만큼만
//       payment+=BigInt(rodes[i])*BigInt(oil[i]);
//       leaves-=rodes[i]
//   }
// }




