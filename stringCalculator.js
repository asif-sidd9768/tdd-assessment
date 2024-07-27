const add = (str) => {
  if(str === "") return 0
  if(!str.includes(",")) return parseInt(str)
  
  const numbers = str.replace(/\n/g, ',').split(",").map(num => parseInt(num))
  return numbers.reduce((sum, currNum) => sum + parseInt(currNum), 0)
}

module.exports = add