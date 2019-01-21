//Basic Algorithm Scripting: Mutations

1.
function mutation(arr) {
  let firstElement = arr[0].toLowerCase();
  let secondElement = arr[1].toLowerCase();
  for (let i=0;i<secondElement.length;i++) {
    if (firstElement.indexOf(secondElement[i]) === -1)
      return false;
  }
  return true;
 }
 mutation(["hello", "hey"]);




2.
function mutation(arr) {
  let firstElement = arr[0].toLowerCase();
  let secondElement = arr[1].toLowerCase();
  let response = [];
  for(let i=0; i<secondElement.length; i++){
    let res = (firstElement.indexOf(secondElement[i]) === -1) ? false: true;
    response.push(res);
  } 
  console.log(response);
  let confirm;
  for(let j=0; j<response.length; j++){
    if(response[j] === true){
      confirm = true;
    }
    else{
      confirm = false;
    }
  }
return confirm;
}
  
mutation(["hello", "hey"]);

