Basic Algorithm Scripting: Truncate a String

function truncateString(str, num) {
  // Clear out that junk in your trunk
  var truncateString = str.substring(0,num) ;
  if(num === str.length){
  return str;
 }
else if(str.length+2 === num){
 return str;
}
else{
  return truncateString+"..." ;
}
}

truncateString("A-tisket a-tasket A green and yellow basket",8); 
