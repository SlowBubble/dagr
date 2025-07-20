export const testPrices = [
  { year: 2021, month: 1, price: 1 },
]

for (let idx = 2; idx < 13 + 12 * 2; idx++) {
  testPrices.push({year: 2021, month: idx, price: Math.pow(1.01, idx - 1)});
}
