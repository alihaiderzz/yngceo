"use client"

import type { ReactNode } from "react"
import { createContext, useContext } from "react"
import { type SimAsset, useSimulatedWatchlistCore } from "@/lib/simulatedWatchlist"

export { fmtSim, type SimAsset } from "@/lib/simulatedWatchlist"

const SimulatedWatchlistContext = createContext<SimAsset[] | null>(null)

export function SimulatedWatchlistProvider({ children }: { children: ReactNode }) {
  const assets = useSimulatedWatchlistCore()
  return (
    <SimulatedWatchlistContext.Provider value={assets}>
      {children}
    </SimulatedWatchlistContext.Provider>
  )
}

export function useSimulatedWatchlist(): SimAsset[] {
  const v = useContext(SimulatedWatchlistContext)
  if (!v) {
    throw new Error("useSimulatedWatchlist must be used within SimulatedWatchlistProvider")
  }
  return v
}
