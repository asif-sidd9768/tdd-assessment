const add = (str) => {
  // Handle empty string
  if (str === "") return 0;

  // Check for custom delimiter
  if (str.startsWith("//")) {
    const [delimiterLine, numbersLine] = str.split("\n");
    const delimiter = delimiterLine[2];
    str = numbersLine.replace(new RegExp(delimiter, "g"), ",");
  }

  // Split string into numbers and handle errors
  const numbers = str
    .replace(/\n/g, ",")
    .split(",")
    .map((num) => parseInt(num, 10))
    .filter((num) => !isNaN(num));

  // Calculate sum
  return numbers.reduce((sum, currNum) => sum + currNum, 0);
}

module.exports = add