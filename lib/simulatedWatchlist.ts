"use client"

import { useEffect, useRef, useState } from "react"

export interface SimAsset {
  name: string
  raw: number
  decimals: number
  dir: "up" | "dn"
  pct: string
}

export const SIM_SEEDS: SimAsset[] = [
  { name: "XAU/USD", raw: 3234.1, decimals: 2, dir: "up", pct: "+0.82%" },
  { name: "BTC/USD", raw: 103140, decimals: 0, dir: "up", pct: "+1.24%" },
  { name: "ETH/USD", raw: 2618, decimals: 0, dir: "up", pct: "+0.91%" },
  { name: "S&P 500", raw: 5897, decimals: 0, dir: "dn", pct: "−0.31%" },
  { name: "NASDAQ", raw: 18934, decimals: 0, dir: "up", pct: "+0.47%" },
  { name: "AUD/USD", raw: 0.6441, decimals: 4, dir: "up", pct: "+0.18%" },
  { name: "WTI OIL", raw: 61.84, decimals: 2, dir: "dn", pct: "−0.55%" },
  { name: "XAG/USD", raw: 32.41, decimals: 2, dir: "up", pct: "+1.03%" },
  { name: "VIX", raw: 17.82, decimals: 2, dir: "dn", pct: "−2.10%" },
  { name: "DXY", raw: 101.34, decimals: 2, dir: "dn", pct: "−0.22%" },
]

export function fmtSim(val: number, dec: number): string {
  return val >= 1000
    ? val.toLocaleString("en-US", {
        minimumFractionDigits: dec,
        maximumFractionDigits: dec,
      })
    : val.toFixed(dec)
}

const TICK_MS = 3500

export function useSimulatedWatchlistCore() {
  const [assets, setAssets] = useState<SimAsset[]>(SIM_SEEDS)
  const rawRef = useRef(SIM_SEEDS.map((a) => a.raw))

  useEffect(() => {
    const id = window.setInterval(() => {
      const next = rawRef.current.map((cur) => {
        const drift = (Math.random() - 0.499) * 0.0015 * cur
        return cur + drift
      })
      rawRef.current = next

      setAssets((prev) =>
        prev.map((a, i) => {
          const cur = next[i]!
          const delta = cur - a.raw
          const pctVal = a.raw !== 0 ? (delta / a.raw) * 100 : 0
          const up = pctVal >= 0
          return {
            ...a,
            raw: cur,
            dir: up ? "up" : "dn",
            pct: (up ? "+" : "") + pctVal.toFixed(2) + "%",
          }
        }),
      )
    }, TICK_MS)

    return () => window.clearInterval(id)
  }, [])

  return assets
}
