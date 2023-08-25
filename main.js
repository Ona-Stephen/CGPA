import pkg from "prompt-sync";

const prompt = pkg();

let number_1 = Number(prompt("Enter first interger: "));

let number_2 = Number(prompt("Enter second interger: "));

if (number_1 > number_2) {
  console.log("First interger is greater than second interger");
} else if (number_1 < number_2) {
  console.log("Second interger is greater than first interger");
} else if (number_1 == number_2) {
  console.log("The numbers are equal");
}

let num_one = Number(prompt("Enter first interger: "));
let num_two = Number(prompt("Enter second interger: "));
let num_three = Number(prompt("Enter third interger: "));
let num_four = Number(prompt("Enter fourth interger: "));
let num_five = Number(prompt("Enter fifth interger: "));

if (
  num_one > num_two &&
  num_one > num_three &&
  num_one > num_four &&
  num_one > num_five
) {
  console.log(`The greatest number is ${num_one}`);
} else if (
  num_two > num_one &&
  num_two > num_three &&
  num_two > num_four &&
  num_two > num_five
) {
  console.log(`The greatest number is ${num_two}`);
} else if (
  num_three > num_one &&
  num_three > num_two &&
  num_three > num_four &&
  num_three > num_five
) {
  console.log(`The greatest number is ${num_three}`);
} else if (
  num_four > num_one &&
  num_four > num_two &&
  num_four > num_three &&
  num_four > num_five
) {
  console.log(`The greatest number is ${num_four}`);
} else if (
  num_five > num_one &&
  num_five > num_two &&
  num_five > num_three &&
  num_five > num_four
) {
  console.log(`The greatest number is ${num_five}`);
} else {
  console.log("The numbers are equal");
}
