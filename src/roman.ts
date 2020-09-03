const numberToArray = (n: number): number[] =>
  Array.from(String(n), Number)

export function toRoman (n: number): string {
  if (n <= 0 || n > 3999) throw new RangeError('Number out of range for Roman numerals.')

  return numberToArray(n).reduce(
    (accumulator, digit, index, original): string =>
      accumulator + getRomanNumeral(original.length - index - 1, digit)
    , ''
  )
}

function getRomanNumeral (place: number, digit: number): string {
  if (digit === 0) return ''

  const placeSymbols = ['I', 'X', 'C', 'M', '']
  const placeHalfSymbols = ['V', 'L', 'D', '']
  const symbol = placeSymbols[place]
  const halfSymbol = placeHalfSymbols[place]
  const nextSymbol = placeSymbols[place + 1]

  if (digit <= 3) return symbol.repeat(digit)
  if (digit === 4) return symbol + halfSymbol
  if (digit <= 8) return halfSymbol + symbol.repeat(digit - 5)
  if (digit === 9) return symbol + nextSymbol
}
