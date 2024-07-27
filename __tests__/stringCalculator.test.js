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

  test('should address new lines as delimeters', () => {
    expect(add('1\n2,3')).toBe(6)
  })
  
  test('should address custom delimeter', () => {
    expect(add('//;\n1;2')).toBe(3)
  })
  
  test('should throw error for negative numbers', () => {
    expect(() => add('1,2,-3,-4')).toThrow('negative numbers not allowed -3, -4')
  });  
  
  test('should ignore numbers greater than 1000', () => {
    expect(add('2,1001')).toBe(2)
  })
  
})
