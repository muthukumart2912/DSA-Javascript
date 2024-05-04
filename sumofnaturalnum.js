//Find the sum of natural numbers
function findSumOfNaturalNumbers(n){
        sum = 0
        for(i=0;i<=n ;i++){
            sum+=i
        }
        return sum;
}

console.log(findSumOfNaturalNumbers(5));

function findSumOfNaturalNumbers(n){
    return (n * (n+1))/2
}
console.log(findSumOfNaturalNumbers(5));
