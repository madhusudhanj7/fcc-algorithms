// 3.Intermediate Algorithm Scripting: Seek and Destroy

function destroyer(arr,...x) {
  // Remove all the values
  let newArr=[];
for(let i=0; i<arr.length; i++){
  if(x.indexOf(arr[i])===-1){
    newArr.push(arr[i])
  }
}
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
