// 1. Intermediate Algorithm Scripting: Sum All Numbers in a Range.

function sumAll(arr) {
  let result=0;
let a = Math.min(arr[0],arr[1]);
let b = Math.max(arr[0],arr[1]);
for(let i=a; i<=b; i++){
   result += i;
}
 return result;
 }
sumAll([1, 4]);
