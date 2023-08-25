import pkg from "prompt-sync";

const prompt = pkg();

const student_detail = [];
const student_grade = [];

let number_of_students = prompt(
  "Enter Number of Students taking this course: "
);

for (let num = 0; num < number_of_students; num++) {
  let student_name = prompt("Enter student name: ");
  let student_score = prompt("Enter Student score: ");
  student_detail.push(student_name, student_score);

  if (student_score <= 40) student_score = "F";
  else if (student_score >= 41 && student_score <= 50) student_score = "E";
  else if (student_score >= 51 && student_score <= 60) student_score = "D";
  else if (student_score >= 61 && student_score <= 70) student_score = "C";
  else if (student_score >= 71 && student_score <= 80) student_score = "B";
  else if (student_score >= 81 && student_score <= 100) student_score = "A";
}

console.log(student_detail);
// let number_of_students = prompt("Enter number of students in class: ");

// let student_name = prompt("Enter student name: ");

// let student_score = prompt("Enter student score: ");

// student_detail.push("Dear " + student_name + "your grade is" + " ");

// student_detail.forEach((student_detail, index) => {
//   if (student_score <= 100 && student_score >= 80) student_score = "A";
// });
// console.log(student_detail);
