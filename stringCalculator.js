const add = (str) => {
  // Handle empty string
  if (str === "") return 0;

  // Check for custom delimiter
  if (str.startsWith("//")) {
    const [delimiterLine, numbersLine] = str.split("\n");
    const delimiter = delimiterLine.substring(2, delimiterLine.length); // Extract delimiter
    str = numbersLine.replace(new RegExp(delimiter, "g"), ",");
  }

  console.log(str)

  // Split string into numbers and handle errors
  const numbers = str
    .replace(/\n/g, ",")
    .split(",")
    .map((num) => parseInt(num, 10))
    .filter((num) => !isNaN(num) && num <= 1000);

  const negativeNumbers = numbers.filter(num => num < 0)  
  if(negativeNumbers.length > 0){
    throw new Error('negative numbers not allowed ' + negativeNumbers.join(', '))
  }

  // Calculate sum
  return numbers.reduce((sum, currNum) => sum + currNum, 0);
}

module.exports = add