export function toRoman (n: number): string {
  if (n < 0 || n > 3999) {
    throw new RangeError('Number out of range for Roman numerals.')
  }
  var ret = ''
  var digit: number
  var mult = 1000
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
  var ret = ''
  if (digit >= 1 && digit <= 3) {
    ret = placeSymbols[place]
    for (let i = 1; i < digit; i++) {
      ret += placeSymbols[place]
    }
    return ret
  } else if (digit === 4) {
    ret = placeSymbols[place] + placeHalfSymbols[place]
    return ret
  } else if (digit > 4 && digit < 9) {
    ret = placeHalfSymbols[place]
    for (let i = 0; i < digit - 5; i++) {
      ret += placeSymbols[place]
    }
    return ret
  } else {
    ret = placeSymbols[place] + placeSymbols[place + 1]
    return ret
  }
}
