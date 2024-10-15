#!/usr/bin/node
const getGrade = require('./getgrade');

/*  Complete the function hasPassingGrade that takes a student score as a parameter.
    Your function should return true if the student has a passing grade and false if they do not.
*/
const hasPassingGrade = (score) => {
  const grade = getGrade(score);

  if (grade === "F") {
    return false;
  } else {
    return true;
  }
}

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

module.exports = hasPassingGrade;
