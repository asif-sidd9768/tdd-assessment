const add = require("../stringCalculator")

describe('String Calculator', () => {
  
  test('should return 0 for empty string', () => {
    expect(add('')).toBe(0)
  })

  test('should return number itself for single number', () => {
    expect(add('1')).toBe(1)
  })
  
  test('should return addition of two numbers', () => {
    expect(add('2,3')).toBe(5)
  })
  
  test('should return sum of multiple numbers', () => {
    expect(add('2,4,6,8')).toBe(20)
  })
  
})
