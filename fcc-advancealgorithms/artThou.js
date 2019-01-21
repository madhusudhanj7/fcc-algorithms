// Intermediate Algorithm Scripting: Wherefore art thou.

function whatIsInAName(collection, source) {
  // What's in a name?
  // Only change code below this line
  let arr = collection.filter(function(item){
    for(let i in source){
      if(source[i] != item[i]){
       return false;
      }
    }
    return true;
  });
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
