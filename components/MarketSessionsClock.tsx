"use client"

import { useEffect, useMemo, useState } from "react"
import { fmtSim, useSimulatedWatchlist } from "@/components/SimulatedWatchlistProvider"
import type { SimAsset } from "@/lib/simulatedWatchlist"
import {
  activeVenues,
  findNextGlobalOpen,
  formatCountdownHHMM,
  type Venue,
  VENUES,
} from "@/lib/marketSessions"

const SNAP_ROWS: { match: string; short: string }[] = [
  { match: "S&P 500", short: "S&P" },
  { match: "NASDAQ", short: "NDX" },
  { match: "BTC/USD", short: "BTC" },
]

function useNow(tickMs: number) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), tickMs)
    return () => window.clearInterval(id)
  }, [tickMs])

  return now
}

function SessionSnap({ assets }: { assets: SimAsset[] }) {
  const byName = useMemo(
    () => Object.fromEntries(assets.map((a) => [a.name, a])),
    [assets],
  )

  return (
    <div
      className="market-sessions__snap"
      aria-label="Simulated snapshot: S and P 500, NASDAQ, Bitcoin"
    >
      {SNAP_ROWS.map(({ match, short }) => {
        const q = byName[match]
        if (!q) {
          return (
            <span key={match} className="market-sessions__snap-chip market-sessions__snap-chip--muted">
              <span className="market-sessions__snap-sym">{short}</span>
              <span className="market-sessions__snap-p">—</span>
              <span className="market-sessions__snap-b"> </span>
              <span className="market-sessions__snap-c">—</span>
            </span>
          )
        }
        const up = q.dir === "up"
        return (
          <span key={match} className="market-sessions__snap-chip">
            <span className="market-sessions__snap-sym">{short}</span>
            <span className="market-sessions__snap-p">{fmtSim(q.raw, q.decimals)}</span>
            <span className="market-sessions__snap-b">SIM</span>
            <span
              className={`market-sessions__snap-c market-sessions__snap-c--${up ? "up" : "down"}`}
            >
              {up ? "▲" : "▼"} {q.pct}
            </span>
          </span>
        )
      })}
    </div>
  )
}

export function MarketSessionsClock({ className }: { className?: string }) {
  const now = useNow(1000)
  const assets = useSimulatedWatchlist()
  const minuteKey = Math.floor(now.getTime() / 60000)

  const nextOpen = useMemo(() => {
    return findNextGlobalOpen(now, 96)
  }, [now, minuteKey])

  const activeIds = useMemo(() => {
    return new Set(activeVenues(now).map((v) => v.id))
  }, [now])

  const countdown =
    nextOpen && nextOpen.at.getTime() > now.getTime()
      ? formatCountdownHHMM(now, nextOpen.at)
      : null

  return (
    <div className={`market-sessions ${className ?? ""}`} aria-live="polite">
      <SessionSnap assets={assets} />
      <div className="market-sessions__grid">
        {VENUES.map((v) => (
          <SessionCell key={v.id} venue={v} active={activeIds.has(v.id)} />
        ))}
      </div>
      {countdown && nextOpen ? (
        <div className="market-sessions__next">
          <span className="market-sessions__next-label">Next open</span>
          <span className="market-sessions__next-meta">
            {nextOpen.venue.id} · {countdown}
          </span>
        </div>
      ) : null}
    </div>
  )
}

function SessionCell({ venue, active }: { venue: Venue; active: boolean }) {
  return (
    <div
      className={`market-sessions__cell${active ? " market-sessions__cell--active" : ""}`}
    >
      <div className="market-sessions__idrow">
        <span className="market-sessions__id">{venue.id}</span>
        <span className="market-sessions__tz">{venue.tzNote}</span>
      </div>
      <span className="market-sessions__hours">{venue.hoursLabel}</span>
    </div>
  )
}
