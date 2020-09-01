
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
  const placeSymbols = ['I', 'X', 'C', 'M', '']
  const placeHalfSymbols = ['V', 'L', 'D', '']
  let ret = ''
  const symbol = placeSymbols[place]
  const halfSymbol = placeHalfSymbols[place]
  const nextSymbol = placeSymbols[place + 1]

  switch (digit) {
    case 1:
    case 2:
    case 3:
      for (let i = 0; i < digit; i++) {
        ret += symbol
      }
      break
    case 4:
      ret = symbol + halfSymbol
      break
    case 5:
    case 6:
    case 7:
    case 8:
      ret = halfSymbol
      for (let i = 0; i < digit - 5; i++) {
        ret += symbol
      }
      break
    case 9:
      ret = symbol + nextSymbol
  }

  return ret
}
