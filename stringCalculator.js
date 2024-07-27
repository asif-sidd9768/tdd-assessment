const add = (str) => {
  if(str === "") return 0
  if(str.length === 1) return parseInt(str)
  
  if(str.startsWith('//')){
    const parts = str.split('\n')
    const delimeter = parts[0][2]
    str = parts[1].split(delimeter).join(',')
  }

  const numbers = str.replace(/\n/g, ',').split(",").map(num => parseInt(num))
  return numbers.reduce((sum, currNum) => sum + parseInt(currNum), 0)
}

module.exports = add