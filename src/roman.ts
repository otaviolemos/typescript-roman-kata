export function toRoman (n: number): string {
  if (n < 0 || n > 3999) {
    throw new RangeError('Number out of range for Roman numerals.')
  }
  let ret = ''
  let digit: number
  let mult = 1000
  for (let place = 4; place >= 1; place--) {
    digit = Math.trunc(n / mult)
    if (digit >= 1) {
      ret += getRomanNumeral(place - 1, digit)
      n = n - (digit * mult)
    }
    mult = mult / 10
  }
  return ret
}

function getRomanNumeral (place: number, digit: number): string {
  const placeSymbols = ['I', 'X', 'C', 'M']
  const placeHalfSymbols = ['V', 'L', 'D']
  let ret = ''

  switch (digit) {
    case 1:
    case 2:
    case 3:
      ret = placeSymbols[place]
      for (let i = 1; i < digit; i++) {
        ret += placeSymbols[place]
      }
      break
    case 4:
      ret = placeSymbols[place] + placeHalfSymbols[place]
      break
    case 5:
    case 6:
    case 7:
    case 8:
      ret = placeHalfSymbols[place]
      for (let i = 0; i < digit - 5; i++) {
        ret += placeSymbols[place]
      }
      break
    case 9:
      ret = placeSymbols[place] + placeSymbols[place + 1]
  }

  return ret
}
