import pkg from "prompt-sync";

const prompt = pkg();

const num_of_courses = [5];
const course_code = ["EGL 201", "LIT 203", "PHY 206", "FRN 204", "CSC 204"];
const unit = [3, 2, 6, 4, 2];
const score = [];
const grades = [];
const quality_points = [];
let total_quality_point = 0;
let total_grades = 0;

for (let num = 0; num < num_of_courses; num++) {
  let student_score = Number(prompt(`Enter Course ${num + 1} score: `));
  score.push(student_score);

  if (student_score >= 70) {
    grades.push(5);
  } else if (student_score >= 60) {
    grades.push(4);
  } else if (student_score >= 50) {
    grades.push(3);
  } else if (student_score >= 40) {
    grades.push(2);
  } else {
    grades.push(0);
  }
}

console.log(`No.     Course code     Course Unit     Score     Grades
-----------------------------------------------------------------------`);
for (let index = 0; index < num_of_courses; index++) {
  console.log(`${index + 1}       ${course_code[index]}           ${
    unit[index]
  }               ${score[index]}        ${grades[index]}
`);
}

for (let index = 0; index < unit.length; index++) {
  quality_points.push(unit[index] * grades[index]);
}

for (let index = 0; index < unit.length; index++) {
  total_unit += quality_points[index];
  total_grades +=grades[index];
}

let cgpa = total_unit / total_grades;
console.log(`NAME: ONYIA DANIEL`);
console.log(`MATRIC NO.: FRN/2019/225`);
console.log(cgpa);
// console.log(`Your CGPA for this session is: ${cgpa}`);
