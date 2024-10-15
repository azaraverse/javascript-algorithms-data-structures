#!/usr/bin/node
// convert student score to a letter grade
/*  score range   grade
    100           "A++"
    90-99         "A"
    80-89         "B"
    70-79         "C"
    60-69         "D"
    0-59          "F"
*/
const getGrade = (score) => {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

module.exports = getGrade;
