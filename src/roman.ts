
export function toRoman (number: number): string {
  if (number <= 0 || number > 3999) {
    throw new RangeError('Number out of range for Roman numerals.')
  }

  const placeSymbols = ['I', 'X', 'C', 'M', '']
  const placeHalfSymbols = ['V', 'L', 'D', '']

  function handlerSpecialCase (localNumber: string): string {
    const specialCases = {}
    specialCases['9'] = placeSymbols.map((c, i) => c + placeSymbols[i + 1]).filter((c, i, a) => i < (a.length - 1))
    specialCases['4'] = placeHalfSymbols.map((c, i) => placeSymbols[i] + c).filter((c, i, a) => i < (a.length - 1))
    const firstNumber = localNumber[0]
    const specialCaseItem = specialCases[firstNumber]
    const decimalPlaces = localNumber.length - 1
    const romanNumber = specialCaseItem[decimalPlaces]
    return romanNumber
  }

  function handlerNormalCase (localNumber: string): string {
    const firstNumber = +localNumber[0]
    const decimalPlaces = localNumber.length - 1
    const firstDigitRepeatTimes = firstNumber / 5
    const secondDigitRepeatTimes = firstNumber % 5
    const firstCharacter = placeHalfSymbols[decimalPlaces].repeat(firstDigitRepeatTimes) ?? ''
    const secondCharacter = placeSymbols[decimalPlaces].repeat(secondDigitRepeatTimes) ?? ''
    const romanNumber = firstCharacter + secondCharacter
    return romanNumber
  }

  function isSpecialNumberCase (number: string): boolean {
    return +number[0] % 5 === 4
  }

  function decomposeNumber (number: string, index: number, array: string[]): string {
    const decimalPlaces = '0'.toString().repeat(array.length - index - 1)
    return `${number}${decimalPlaces}`
  }

  function handlerCase (number: string, index: number, array: string[]): string {
    const decomposedNumber = decomposeNumber(number, index, array)
    let strategyCase = isSpecialNumberCase(decomposedNumber) ? handlerSpecialCase : handlerNormalCase

    if (decomposedNumber === '0') { strategyCase = (number: string) => '' }

    return strategyCase(decomposedNumber)
  }

  const romanNumber =
    number.toString()
      .split('')
      .map(handlerCase)
      .join('')

  return romanNumber
}
