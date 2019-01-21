Basic Algorithm Scripting: Repeat a String Repeat a String.

function repeatStringNumTimes(str, num) {
  // repeat after me
  if(num<0){
    return "";
  }
  else if(num ==1){
    return str;
  }
  else{
  return str+repeatStringNumTimes(str, num-1);
}}

repeatStringNumTimes("madhu", 3);
