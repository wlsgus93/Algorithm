// https://www.acmicpc.net/problem/4344
// 평균은 넘겠지
// 케이스마다 평균이 넘는 학생들의 수 비율 산출

let fs = require('fs');
let [testcase,...list] = fs.readFileSync('./backjoon/test/4344.txt').toString().trim().split('\n');
let testcase1=Number(testcase);
let answer=''
for (let i=0;i<testcase1;i++)
{   
    let average=0;
    let count=0;
    let [student,...scores]=(list[i].split(' ')).map(Number)
    average=scores.reduce((a,b)=>a+b)/student
    for (let j=0; j<scores.length;j++)
    {
        if(scores[j]>average)
        {
            count+=1;
        }
    }
    answer=answer+parseFloat(count/student*100).toFixed(3)+'%\n'
}
console.log(answer)
