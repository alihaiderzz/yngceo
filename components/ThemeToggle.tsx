"use client"

import { useCallback, useSyncExternalStore } from "react"

export type Theme = "light" | "dark"

const STORAGE_KEY = "yngceo-theme"
const THEME_EVENT = "yngceo-theme"

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {}
  const run = () => onStoreChange()
  window.addEventListener("storage", run)
  window.addEventListener(THEME_EVENT, run)
  return () => {
    window.removeEventListener("storage", run)
    window.removeEventListener(THEME_EVENT, run)
  }
}

function getThemeSnapshot(): Theme {
  if (typeof document === "undefined") return "dark"
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark"
}

function getServerThemeSnapshot(): Theme {
  return "dark"
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, getServerThemeSnapshot)
  const isLight = theme === "light"

  const apply = useCallback((next: Theme) => {
    document.documentElement.setAttribute("data-theme", next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new Event(THEME_EVENT))
  }, [])

  const toggle = useCallback(() => {
    apply(theme === "dark" ? "light" : "dark")
  }, [apply, theme])

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      suppressHydrationWarning
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      aria-pressed={isLight}
    >
      <span className="theme-toggle__track" aria-hidden>
        <span className="theme-toggle__thumb" />
      </span>
      <span className="theme-toggle__label">{isLight ? "Light" : "Dark"}</span>
    </button>
  )
}
