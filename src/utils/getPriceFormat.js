export function getPriceFormat(value) {
  return `${new Intl.NumberFormat({ maximumSignificantDigits: 3 }).format(
    value,
  )} đ`
}