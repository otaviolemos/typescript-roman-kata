export function toRoman (n: number): string {
  if (n <= 0 || n > 3999) {
    throw new RangeError('Number out of range for Roman numerals.')
  }
  const numStr = n.toString()
  return numStr.split('').map((digit, index) => {
    return getRomanNumeral(numStr.length - index - 1, parseInt(digit))
  }).join('')
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

  switch (digit) {
    case 1:
    case 2:
    case 3:
      return symbol.repeat(digit)
    case 4:
      return symbol + halfSymbol
    case 5:
    case 6:
    case 7:
    case 8:
      return halfSymbol + symbol.repeat(digit - 5)
    case 9:
      return symbol + nextSymbol
  }
}
