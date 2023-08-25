import pkg from "prompt-sync";

const prompt = pkg();

const courses = ["EGL", "PHY", "FRN", "GYP", "MTH"];
const code = [103, 106, 112, 107, 129];
const units = [3, 3, 5, 2, 3];
const score = [];
const grades = [];
const quality_points = [];
let total_quality_points = 0;
let total_units = 0;

for (let index = 0; index < courses.length; index++) {
  let student_score = prompt(`Enter ${courses[index]} ${code[index]} score: `);
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

console.log(`NO.     COURSES     CODE     UNITS     SCORE     GRADE
----------------------------------------------------------`);
for (let num = 0; num < courses.length; num++) {
  console.log(`${num + 1}       ${courses[num]}         ${code[num]}         ${
    units[num]
  }        ${score[num]}       ${grades[num]}
`);
}

for (let num = 0; num < courses.length; num++) {
  quality_points.push(units[num] * grades[num]);
}

for (let num = 0; num < courses.length; num++) {
  total_quality_points += quality_points[num];
  total_units += units[num];
}

let cgpa = total_quality_points / total_units;

console.log(`Dear Student, your CGPA for this session is ${cgpa}`);
