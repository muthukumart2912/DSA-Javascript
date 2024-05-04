//check whether a number is prime or not

function Isprime(num){
    if (num < 2){
        return false;
    }
    for (let i = 2; i < num; i++) {
        if(num % i === 0){
            return false
        }
        
    }
    return true;
}

console.log(Isprime(1))
console.log(Isprime(4))
console.log(Isprime(43))

                                 