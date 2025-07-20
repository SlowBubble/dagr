type Prices = { year: number, month: number, price: number }[];

export function computeDcaCAGR(prices: Prices, costBasisRatio = 1) {
  let shares = 0
  const nMonths = prices.length
  for (let i = 0; i < nMonths; i++) {
    shares += 1 / prices[i].price
  }
  const finalValue = shares * prices[nMonths - 1].price
  const costBasis = nMonths * costBasisRatio
  const totalGrowth = finalValue / costBasis
  const first = prices[0]
  const last = prices[nMonths - 1]
  const n = last.year - first.year + (last.month - first.month) / 12
  return Math.pow(totalGrowth, 1 / n) - 1
}

export function computeCAGR(prices: Prices) {
  const first = prices[0]
  const last = prices[prices.length - 1]
  const n = last.year - first.year + (last.month - first.month) / 12
  return Math.pow(last.price / first.price, 1 / n) - 1
}

export function computeCMGR(prices: Prices) {
  const first = prices[0]
  const last = prices[prices.length - 1]
  const n = (last.year - first.year) * 12 + (last.month - first.month)
  if (n === 0) return 0
  return Math.pow(last.price / first.price, 1 / n) - 1
}

export function computeDcaCMGR(prices: Prices, costBasisRatio = 1) {
  let shares = 0
  const nMonths = prices.length
  for (let i = 0; i < nMonths; i++) {
    shares += 1 / prices[i].price
  }
  const finalValue = shares * prices[nMonths - 1].price
  const costBasis = nMonths * costBasisRatio
  const totalGrowth = finalValue / costBasis
  const first = prices[0]
  const last = prices[nMonths - 1]
  const n = (last.year - first.year) * 12 + (last.month - first.month)
  if (n === 0) return 0
  return Math.pow(totalGrowth, 1 / n) - 1
}
