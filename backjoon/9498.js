// https://www.acmicpc.net/problem/9498

var fs = require('fs');
var input =fs.readFileSync('./backjoon/test/9498.txt').toString()

let a=parseInt(input)

console.log(a)

if (a>=90 && a<=100){
    console.log('A')
}
else if(a>=80 && a<90 ){
    console.log('B')
}
else if(a>=70 && a<80 ){
    console.log('C')
}
else if(a>=60 && a<70 ){
    console.log('D')
}
else{
    console.log('F')
}

// console.log(a/10|0)
// console.log('FFFFFFDCBAA'[a/10|0])
// 비트연산 or논리연산자
// console.log(|0)