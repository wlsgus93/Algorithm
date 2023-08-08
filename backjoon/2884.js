// https://www.acmicpc.net/problem/2884
// 알람시계

var fs = require('fs');
var input = fs.readFileSync('./backjoon/test/2884.txt').toString().split(' ')

console.log(input)

let hour=parseInt(input[0])
let min=parseInt(input[1])

if (min<45)
{
    min=60+min-45
    if(hour==0)
    {
        hour=23
    }
    else{
        hour=hour-1
    }
}
else
{
    min=min-45
}
console.log(`${hour} ${min}`)


//shortcoding
// [h,m]=`${require('fs').readFileSync(0)}`.split` `
// t=+m+1395+60*h
// console.log(t/60%24|0,t%60)