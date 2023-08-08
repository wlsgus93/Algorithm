// https://www.acmicpc.net/problem/2588

var fs = require('fs');
var input = fs.readFileSync('./backjoon/test/2558.txt').toString().split('\n')
console.log(input)
var a = parseInt(input[0]);
var b = input[1];
console.log(typeof(b)) ///logs String
console.log(a*parseInt(b[2]))
console.log(a*parseInt(b[1]))
console.log(a*parseInt(b[0]))
console.log(a*parseInt(b))
