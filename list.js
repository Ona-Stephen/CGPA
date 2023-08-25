import pkg from "prompt-sync";

const prompt = pkg();

const num_of_courses = [5];
const course_code = ["PHY 201", "LIT 202", "FRN 206", "YOR 214", "GYP 255"];
const unit = [3, 3, 6, 2, 3];
const score = [];
const grades = [];

for (let num = 0; num < num_of_courses; num++) {
  let student_score = Number(prompt(`Enter Score ${num + 1}: `));
  score.push(student_score);

  if (student_score >= 70) {
    grades.push(Number(5));
  } else if (student_score >= 60) {
    grades.push(Number(4));
  } else if (student_score >= 50) {
    grades.push(Number(3));
  } else if (student_score >= 40) {
    grades.push(Number(2));
  } else {
    grades.push(Number(0));
  }
}

console.log(`No.     COURSE CODE     UNIT     SCORE     GRADES
----------------------------------------------------------------`);

for (let num = 0; num < num_of_courses; num++) {
  console.log(
    `${num}       ${course_code[num]}          ${unit[num]}         ${score[num]}        ${grades[num]}`
  );
}

cgpa =

console.log("NAME: ONYIA DANIEL")
console.log("MATRIC NO.:FRN/2019/245")
console.log(`Your CGPA for this session is ${cgpa}`)

