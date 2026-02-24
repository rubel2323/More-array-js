// Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

const numbers = [1, 2, 3];
let numArr = [...numbers];
numArr[0] = 99;
console.log(numbers, numArr);
