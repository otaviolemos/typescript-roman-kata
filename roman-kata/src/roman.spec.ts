import { toRoman } from './roman'

describe('integer to roman numeral converter', () => {
  test('should throw error for negative numbers', () => {
    expect(() => {
      toRoman(-1)
    }).toThrow(new RangeError('Number out of range for Roman numerals.'))
  })

  test('should throw error for zero', () => {
    expect(() => {
      toRoman(0)
    }).toThrow(new RangeError('Number out of range for Roman numerals.'))
  })

  test('should throw error for numbers larger than 3999', () => {
    expect(() => {
      toRoman(4000)
    }).toThrow(new RangeError('Number out of range for Roman numerals.'))
  })

  test('should return I for 1', () => {
    expect(toRoman(1)).toEqual('I')
  })

  test('should return V for 5', () => {
    expect(toRoman(5)).toEqual('V')
  })

  test('should return XXXIV for 34', () => {
    expect(toRoman(34)).toEqual('XXXIV')
  })

  test('should return L for 50', () => {
    expect(toRoman(50)).toEqual('L')
  })

  test('should return MMM for 3000', () => {
    expect(toRoman(3000)).toEqual('MMM')
  })

  test('should return MMMCMXCIX for 3999', () => {
    expect(toRoman(3999)).toEqual('MMMCMXCIX')
  })

  test('should return MMMCDXLIV for 3444', () => {
    expect(toRoman(3444)).toEqual('MMMCDXLIV')
  })

  test('should return CCCIV for 304', () => {
    expect(toRoman(304)).toEqual('CCCIV')
  })
})
