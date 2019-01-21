// Intermediate Algorithm Scripting: Sum All Primes.

function primes(num) {
  for(let i=2; i<num; i++){
  if(num % i ===0){
    return false;
  }
  }
  return true;
}

function sumPrimes(val){
  let result=0;
  for(let i=2; i<=val; i++){
    if(primes(i)){
      result += i;
    }
  }
 return result;
}

