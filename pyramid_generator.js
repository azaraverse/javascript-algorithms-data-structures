#!/usr/bin/node

const character = "!";
const count = 10;
const rows = [];

// declare inverted to control display of pyramid
const inverted = false;

const padRow = (rowNumber, rowCount) => {
  // use repeat method to construct spaces around the character and multiply the character for a pyramid effect
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

/*  .push() method will append a value to the end of an array
    .pop() method will remove and return the last element of an array
    .unshift() method will append a value to the beginning of an array
    .shift() method will remove and return the first element of an array
*/

// TODO: use different types of loops
/*for (let i = 1; i <= count; i += 1) {
  rows.push(padRow(i, count));
}*/

/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

// reverse the pyramid by looping backwards
/*for (let i = count; i > 0; i -= 1) {
  rows.push(padRow(i, count));
}*/

/*  use unshift() in place of push() to add elements to the start of the array
    this will reverse the pyramid
*/
for (let i = 1; i <= count; i += 1) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = "";

for (const row of rows) {
  result += "\n" + row;
}

console.log(result);
