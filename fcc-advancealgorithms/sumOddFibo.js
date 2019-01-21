// Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers.

function sumFibs(num) {
  let first = 0;
  let second = 1;
  let result = 0;
  while(second <= num){
    if(second % 2!==0){
      result += second;
    }
        second += first;
        first = second - first;
  }

  return result;
} 

sumFibs(4);
