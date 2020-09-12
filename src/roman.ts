export function toRoman (valor: number): string {
  if (valor <= 0 || valor > 3999) {
    throw new RangeError('Number out of range for Roman numerals.')
  }

  const toRomanConvertion = (numero: string): string => {
    const places = numero.length - 1
    const firstDigit = numero[0]
    const special = ['', '4', '9']
    const placeSymbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M', '']
    const operators = [(n: number) => +n / 5, (n: number) => +n % 5]
    const isSpecialCase = +firstDigit % 5 === 4
    const [sliceStart, sliceEnd] = [places * 2, places * 2 + 2 + (+isSpecialCase)]
    const placeWorkSymbols = placeSymbols.slice(sliceStart, sliceEnd)
    const specialCase = (): string => placeWorkSymbols.map((c, i) => i === 0 || special.indexOf(firstDigit) === i ? c : '').join('')
    const normalCase = (): string => placeWorkSymbols.reverse().map((c, i) => c.repeat(operators[i](+firstDigit))).join('')
    const strategy = [normalCase, specialCase][+(isSpecialCase)]
    const roman = strategy()
    return roman
  }

  const result = valor
    .toString()
    .split('')
    .map((c, i, a) => toRomanConvertion(`${c}${'0'.repeat(a.length - i - 1)}`))
    .join('')
  return result
}
