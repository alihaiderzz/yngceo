"use client"

import { useLayoutEffect } from "react"

export function ScrollReveal() {
  useLayoutEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"))
    if (!nodes.length) return

    const mark = (el: Element) => {
      el.classList.add("reveal--visible")
    }

    const flushInView = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight
      for (const el of nodes) {
        const r = el.getBoundingClientRect()
        if (r.bottom > -40 && r.top < vh + 40) {
          mark(el)
        }
      }
    }

    flushInView()

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            mark(e.target)
          }
        }
      },
      {
        root: null,
        rootMargin: "12% 0px 8% 0px",
        threshold: [0, 0.04, 0.12, 0.25],
      }
    )

    for (const el of nodes) io.observe(el)

    const raf = window.requestAnimationFrame(() => flushInView())
    const t = window.setTimeout(flushInView, 400)

    return () => {
      window.cancelAnimationFrame(raf)
      window.clearTimeout(t)
      io.disconnect()
    }
  }, [])

  return null
}
