//finding fibanci series

function findFibanaci(num) {
  let arr = [0, 1];
  for (i = 2; i < num; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}
console.log(findFibanaci(2));
console.log(findFibanaci(3));
console.log(findFibanaci(4));

function increMent(num) {
  let array = [1, 2];
  for (let i = 3; i < num; i++) {
    array.push(i)
  }
  return array;
}

console.log(increMent(5));
