/** Wall-clock parts in a specific IANA timezone. */
export type ZonedParts = {
  year: number
  month: number
  day: number
  hour: number
  minute: number
  second: number
  weekdayShort: string
}

export type Venue = {
  id: "SYD" | "TYO" | "LON" | "NYC"
  name: string
  tz: string
  /** Display line for local session window */
  hoursLabel: string
  /** Half-open [open, close) in local civil time */
  openMin: number
  closeMin: number
  /** Footnote for DST / naming */
  tzNote: string
}

const WD = new Set(["Mon", "Tue", "Wed", "Thu", "Fri"])

export const VENUES: Venue[] = [
  {
    id: "SYD",
    name: "Sydney",
    tz: "Australia/Sydney",
    hoursLabel: "10–16",
    openMin: 10 * 60,
    closeMin: 16 * 60,
    tzNote: "AEST",
  },
  {
    id: "TYO",
    name: "Tokyo",
    tz: "Asia/Tokyo",
    hoursLabel: "09–15",
    openMin: 9 * 60,
    closeMin: 15 * 60,
    tzNote: "JST",
  },
  {
    id: "LON",
    name: "London",
    tz: "Europe/London",
    hoursLabel: "08–16:30",
    openMin: 8 * 60,
    closeMin: 16 * 60 + 30,
    tzNote: "GMT/BST",
  },
  {
    id: "NYC",
    name: "New York",
    tz: "America/New_York",
    hoursLabel: "09:30–16",
    openMin: 9 * 60 + 30,
    closeMin: 16 * 60,
    tzNote: "ET",
  },
]

export function getZonedParts(date: Date, timeZone: string): ZonedParts {
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    weekday: "short",
    hour12: false,
    hourCycle: "h23",
  })
  const parts = dtf.formatToParts(date)
  const o: Record<string, string> = {}
  for (const p of parts) {
    if (p.type !== "literal") o[p.type] = p.value
  }
  return {
    year: Number(o.year),
    month: Number(o.month),
    day: Number(o.day),
    hour: Number(o.hour),
    minute: Number(o.minute),
    second: Number(o.second),
    weekdayShort: o.weekday ?? "",
  }
}

function isWeekday(parts: ZonedParts): boolean {
  return WD.has(parts.weekdayShort)
}

/** Minutes from local midnight (fractional seconds ignored for range). */
function localMinutes(parts: ZonedParts): number {
  return parts.hour * 60 + parts.minute
}

export function isVenueActive(date: Date, venue: Venue): boolean {
  const p = getZonedParts(date, venue.tz)
  if (!isWeekday(p)) return false
  const m = localMinutes(p)
  return m >= venue.openMin && m < venue.closeMin
}

export function activeVenues(date: Date): Venue[] {
  return VENUES.filter((v) => isVenueActive(date, v))
}

export type NextOpen = {
  venue: Venue
  at: Date
}

/**
 * Earliest opening bell after `from` among all venues (minute resolution).
 * Scans up to `maxHours` hours ahead.
 */
export function findNextGlobalOpen(from: Date, maxHours = 72): NextOpen | null {
  const step = 60 * 1000
  const t0 = Math.ceil(from.getTime() / step) * step
  const limit = t0 + maxHours * 60 * 60 * 1000

  for (let t = t0; t < limit; t += step) {
    const cur = new Date(t)
    const prev = new Date(t - step)
    for (const v of VENUES) {
      if (!isVenueActive(prev, v) && isVenueActive(cur, v)) {
        return { venue: v, at: cur }
      }
    }
  }
  return null
}

export function formatCountdownHHMM(from: Date, target: Date): string {
  let sec = Math.max(0, Math.floor((target.getTime() - from.getTime()) / 1000))
  const hh = Math.floor(sec / 3600)
  sec %= 3600
  const mm = Math.floor(sec / 60)
  return `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`
}
