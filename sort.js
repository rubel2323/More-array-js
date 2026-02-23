const numbers = [3, 33, 45, 67, 451, 23, 223];
const num_asc = [...numbers].sort(function (a, b) {
  return a - b;
});
console.log(num_asc);
const num_desc = [...numbers].sort((a, b) => b - a);
console.log(num_desc);
