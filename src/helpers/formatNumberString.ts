export function formatTwoDigitNumber(number?: string) {
  if (number === undefined) return '00';
  if (number.length === 1) return `0${number}`
  return number;
}

export function formatNumberString(number1?: string, number2?: string ) {
  return `${formatTwoDigitNumber(number1)}:${formatTwoDigitNumber(number2)}`;
}

export default formatNumberString;