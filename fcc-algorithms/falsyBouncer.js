Basic Algorithm Scripting: Falsy Bouncer

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var originalArr = [];
  for( var i=0; i<arr.length; i++){
    if(Boolean(arr[i]) == true){
      originalArr.push(arr[i]);
    }
  }
  return originalArr;
}

bouncer([7, "ate", "", false, 9]);
