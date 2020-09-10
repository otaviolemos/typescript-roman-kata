export function toRoman (n: number): string {
  if (n <= 0 || n > 3999) {
    throw new RangeError('Number out of range for Roman numerals.')
  }
  const numStr = n.toString()
  return numStr
    .split('')
    .map((digit, index) => getRomanNumeral(numStr.length - index - 1, parseInt(digit)))
    .join('')
}

function getRomanNumeral (place: number, digit: number): string {
  if (digit === 0) {
    return ''
  }
  const placeSymbols = ['I', 'X', 'C', 'M', '']
  const placeHalfSymbols = ['V', 'L', 'D', '']
  const symbol = placeSymbols[place]
  const halfSymbol = placeHalfSymbols[place]
  const nextSymbol = placeSymbols[place + 1]

  const rules = [
    { key: digit <= 3, value: () => symbol.repeat(digit) },
    { key: digit === 4, value: () => symbol + halfSymbol },
    { key: digit <= 8, value: () => halfSymbol + symbol.repeat(digit - 5) },
    { key: digit === 9, value: () => symbol + nextSymbol }
  ]
  return rules.find(rule => rule.key).value()
}
