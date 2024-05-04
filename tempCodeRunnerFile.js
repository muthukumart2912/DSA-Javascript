function isPower(num){
    if (num < 1){
        return false
    }
    return (num & (num -1 )) === 0
  }
  console.log(isPower(12))