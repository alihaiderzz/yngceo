"use client"

import type { CSSProperties } from "react"
import {
  fmtSim,
  type SimAsset,
  useSimulatedWatchlist,
} from "@/components/SimulatedWatchlistProvider"

const CARD_ROWS: { match: string; label: string }[] = [
  { match: "S&P 500", label: "S&P 500" },
  { match: "NASDAQ", label: "NASDAQ" },
  { match: "VIX", label: "VIX" },
  { match: "BTC/USD", label: "BTC/USD" },
  { match: "ETH/USD", label: "ETH/USD" },
  { match: "DXY", label: "DXY" },
]

function fearFromVix(price: number | undefined): number {
  if (price == null || !Number.isFinite(price)) return 0.42
  return Math.min(1, Math.max(0, (price - 10) / 34))
}

function vixBarPercent(price: number | undefined): number {
  if (price == null || !Number.isFinite(price)) return 32
  return Math.min(100, Math.max(6, ((price - 9) / (46 - 9)) * 100))
}

function assetByName(assets: SimAsset[], name: string): SimAsset | undefined {
  return assets.find((a) => a.name === name)
}

export function TerminalGrid() {
  const assets = useSimulatedWatchlist()
  const vix = assetByName(assets, "VIX")
  const fear = fearFromVix(vix?.raw)
  const barPct = vixBarPercent(vix?.raw)

  const gridStyle = {
    "--fear": String(fear),
  } as CSSProperties

  return (
    <div className="terminal-markets">
      <div className="terminal-fear" aria-label="Simulated volatility gauge">
        <div className="terminal-fear__row">
          <span className="terminal-fear__label">Market fear</span>
          <span className="terminal-fear__vix">
            VIX{" "}
            {vix ? (
              <>
                {fmtSim(vix.raw, vix.decimals)}
                <span
                  className={`terminal-fear__chg terminal-fear__chg--${vix.dir === "up" ? "up" : "down"}`}
                >
                  {" "}
                  {vix.dir === "up" ? "▲" : "▼"} {vix.pct}
                </span>
              </>
            ) : (
              <span className="terminal-fear__muted">—</span>
            )}
          </span>
        </div>
        <div className="fg-bar-wrap">
          <div className="fg-bar-track">
            <div className="fg-bar-fill" style={{ width: `${barPct}%` }} />
          </div>
          <div className="fg-bar-labels">
            <span>calm</span>
            <span>watch</span>
            <span>stress</span>
          </div>
        </div>
      </div>

      <div
        className="terminal-grid terminal-grid--six terminal-grid--breathe"
        style={gridStyle}
      >
        {CARD_ROWS.map((c, i) => {
          const q = assetByName(assets, c.match)
          const delay = `${i * 0.42}s`
          if (!q) {
            return (
              <div
                key={c.match}
                className="terminal-card terminal-card--muted terminal-card--breathe"
                style={{ animationDelay: delay }}
              >
                <div className="terminal-card__head">
                  <span className="terminal-card__label">{c.label}</span>
                  <span className="terminal-card__basis">—</span>
                </div>
                <div className="terminal-card__row">
                  <span className="terminal-card__price">—</span>
                  <span className="terminal-card__delta terminal-card__delta--up">—</span>
                </div>
              </div>
            )
          }
          const up = q.dir === "up"
          return (
            <div
              key={c.match}
              className="terminal-card terminal-card--breathe"
              style={{ animationDelay: delay }}
            >
              <div className="terminal-card__head">
                <span className="terminal-card__label">{c.label}</span>
                <span className="terminal-card__basis">SIM</span>
              </div>
              <div className="terminal-card__row">
                <span className="terminal-card__price">{fmtSim(q.raw, q.decimals)}</span>
                <span
                  className={`terminal-card__delta terminal-card__delta--${up ? "up" : "down"}`}
                >
                  {up ? "▲" : "▼"} {q.pct}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
