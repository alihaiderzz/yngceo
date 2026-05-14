"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: "smooth", block: "start" })
}

/**
 * When opening `/` or `/#section` from another route (e.g. archive), Next
 * does not always scroll to the hash — run after paint.
 */
export function HomeHashScroll() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== "/") return

    const run = () => {
      const h = window.location.hash
      if (!h || h.length < 2) return
      scrollToId(h.slice(1))
    }

    run()
    const t = window.setTimeout(run, 80)
    const t2 = window.setTimeout(run, 320)

    const onHashChange = () => run()
    window.addEventListener("hashchange", onHashChange)

    return () => {
      window.clearTimeout(t)
      window.clearTimeout(t2)
      window.removeEventListener("hashchange", onHashChange)
    }
  }, [pathname])

  return null
}
