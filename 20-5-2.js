// const array = [4, 5, 6, 7, 8];
let revtArray = [];
// for (let i = array.length - 1; i >= 0; i--) {
//   reverseArray.push(array[i]);
// }
// console.log(reverseArray);

// array reversing by function

const names = ["trump", "Bill", "Obama"];

let result = [...names].reverse();
console.log(result);

for (const name of names) {
  revtArray.push(name);
}
console.log(revtArray.reverse());
