"use client"

import { useEffect, useState } from "react"

const SECTIONS = [
  { id: "home", href: "#home" },
  { id: "identity", href: "#identity" },
  { id: "thesis", href: "#thesis" },
  { id: "markets", href: "#markets" },
  { id: "business", href: "#business" },
  { id: "signal", href: "#signal" },
] as const

export function SectionDots() {
  const [active, setActive] = useState("home")

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      Boolean
    ) as HTMLElement[]
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id)
        }
      },
      { root: null, rootMargin: "-38% 0px -42% 0px", threshold: [0, 0.1, 0.25, 0.5, 1] }
    )

    for (const el of els) io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <nav className="section-dots" aria-label="Section navigation">
      {SECTIONS.map((s) => (
        <a
          key={s.id}
          href={s.href}
          className={active === s.id ? "is-active" : ""}
          aria-current={active === s.id ? "true" : undefined}
          title={s.id}
        />
      ))}
    </nav>
  )
}
