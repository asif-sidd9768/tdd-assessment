const add = (str) => {
  if(str === "") return 0
  if(!str.includes(",")) return parseInt(str)
  
  const numbers = str.split(",").map(num => parseInt(num))
  return numbers[0] + numbers[1]
}

module.exports = add