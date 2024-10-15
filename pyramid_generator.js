#!/usr/bin/node

const character = "#";
const count = 8;
const rows = [];

const padRow = (rowNumber, rowCount) => {
  // use repeat method to construct spaces around the character and multiply the character for a pyramid effect
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// TODO: use different types of loops
/*for (let i = 1; i <= count; i += 1) {
  rows.push(padRow(i, count));
}*/

/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

// reverse the pyramid
for (let i = count; i > 0; i -= 1) {
  rows.push(padRow(i, count));
}

let result = "";

for (const row of rows) {
  result += "\n" + row;
}

console.log(result);
