// Intermediate Algorithm Scripting: Steamroller.

function steamrollArray(arr) {
  // I'm a steamroller, baby
   return arr.reduce(function (accumulator, currentValue) {
    return accumulator.concat(Array.isArray(currentValue) ? steamrollArray(currentValue) :currentValue);
  }, []);

  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);

