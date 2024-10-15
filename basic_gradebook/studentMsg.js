#!/usr/bin/node
const getAverage = require('./gradebook');
const getGrade = require('./getgrade');
const hasPassingGrade = require('./passinggrade');

/*
    Complete the studentMsg function with totalScores and studentScore for parameters.
    The function should return a string representing a message to the student.
    If the student passed the course, the string should follow this format:

    class average: average. Your grade: grade. You passed the course.
    class average: average. Your grade: grade. You failed the course.
*/
const studentMsg = (totalScores, studentScore) => {
  const average = getAverage(totalScores);
  const grade = getGrade(studentScore);

  if (hasPassingGrade(studentScore)) {
    return "Class average: " + average + ". Your grade: " + grade + ". You passed the course."
  } else {
    return "Class average: " + average + ". Your grade: " + grade + ". You failed the course."
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
