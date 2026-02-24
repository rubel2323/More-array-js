// Use a for...of loop to concatenate all the elements of an array into a single string.

var numbers = ["Tom", "Tim", "Tik", "Tok"];
let num = "";
for (const number of numbers) {
  num += number;
}
console.log(num);
