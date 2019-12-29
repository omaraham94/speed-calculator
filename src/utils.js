export const roundToTwoDecimalPlaces = (number) => {
  return (Math.round(number * 10000) / 10000)
}
