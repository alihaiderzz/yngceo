export function formatPrice(n: number, decimals: number): string {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

export function formatChangePct(p: number): string {
  const sign = p > 0 ? "+" : p < 0 ? "" : ""
  return `${sign}${p.toFixed(2)}%`
}
