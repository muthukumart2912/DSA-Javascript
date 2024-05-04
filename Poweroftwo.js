function isPowerOfTwo(num) {
    if (num < 1) {
      return false;
    }
    while (num > 1) {
      if (num % 2 !== 0) {
        return false;
      }
      num /= 2;
    }
    return true;
  }
  
  console.log(isPowerOfTwo(1)); // Output: true
  console.log(isPowerOfTwo(2)); // Output: true
  console.log(isPowerOfTwo(12)); // Output: false

  function isPower(num){
    if (num < 1){
        return false
    }
    return (num & (num -1 )) === 0
  }
  console.log(isPower(12))
  