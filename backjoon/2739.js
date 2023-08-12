// https://www.acmicpc.net/problem/2739
// 구구단
// N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.
var fs = require('fs');
var input = Number(fs.readFileSync('./backjoon/test/2739.txt').toString())
var answer=''
for(let i = 1; i<10;i++)
{
    answer=answer+input+` * ${i} = ${input*i}`+'\n'
}
console.log(answer)

//shortcodding

// process.stdin.on('data',b=>{for(i=0;i<9;)console.log(+b,'*',++i,'=',b*i)})