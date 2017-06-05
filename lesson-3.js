var fs = require("fs")

var arr;

var buff = fs.readFileSync(process.argv[2]);

arr = buff.toString()
//console.log(arr);
arr = arr.split('\n');
arr.pop();
console.log(arr.length);