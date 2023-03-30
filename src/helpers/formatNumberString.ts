function formatTwoDigit(number?: string) {
  if (number === undefined) return '00';
  if (number.split("").length === 1) return `0${number}`
  return number;
}

export function formatNumberString(number1?: string, number2?: string ) {
  return `${formatTwoDigit(number1)}:${formatTwoDigit(number2)}`;
}

export default formatNumberString;