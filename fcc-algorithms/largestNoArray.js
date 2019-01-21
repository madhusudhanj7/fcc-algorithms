// Basic Algorithm Scripting: Return Largest Numbers in Arrays

1.

 function largestOfFour(arr) {
  // You can do this!
  let largest = [];
  let count;
  for(let i=0; i<arr.length; i++){
    count = 0;
    for(let j=0; j<arr[i].length; j++){
      (arr[i][j] > count) ? (count = arr[i][j]) : (count = Math.max(...arr[i]))
    }
    largest.push(count);
  }
  return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

2.

  function largestOfFour(arr) {
  // You can do this!
  let largest = [];
  let count;
  for(let i=0; i<arr.length; i++){
    count = 0;
    for(let j=0; j<arr[i].length; j++){
      (count = Math.max(...arr[i]));
    }
    largest.push(count);
  }
  return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

