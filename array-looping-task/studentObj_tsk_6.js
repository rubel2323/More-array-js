// Given an array of student objects, print each student’s name and marks.

const studentObj = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 },
];
for (const student of studentObj) {
  console.log(student.name, "scored", student.marks);
}
