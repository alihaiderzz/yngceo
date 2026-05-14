"use client"

import { fmtSim, useSimulatedWatchlist } from "@/components/SimulatedWatchlistProvider"

export default function Ticker() {
  const assets = useSimulatedWatchlist()
  const doubled = [...assets, ...assets]

  return (
    <div className="ticker-scroll ticker-scroll--sim">
      <div className="ticker-bar">
        <div className="ticker-track">
          {doubled.map((a, i) => (
            <span key={`${a.name}-${i}`} className="ticker-item">
              <span className="ticker-item__name">{a.name}</span>
              <span className="ticker-item__px">{fmtSim(a.raw, a.decimals)}</span>
              <span className={`ticker-item__chg ticker-item__chg--${a.dir}`}>
                {a.dir === "up" ? " ▲ " : " ▼ "}
                {a.pct}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
