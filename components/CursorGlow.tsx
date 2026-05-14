"use client"

import { useEffect, useRef, useState } from "react"

export function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)
  const frame = useRef<number | null>(null)
  const pending = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pending.current = { x: e.clientX, y: e.clientY }
      if (frame.current == null) {
        frame.current = requestAnimationFrame(() => {
          frame.current = null
          setPos(pending.current)
        })
      }
      setActive(true)
    }

    const onLeave = () => setActive(false)

    window.addEventListener("mousemove", onMove, { passive: true })
    document.body.addEventListener("mouseleave", onLeave)

    return () => {
      window.removeEventListener("mousemove", onMove)
      document.body.removeEventListener("mouseleave", onLeave)
      if (frame.current != null) cancelAnimationFrame(frame.current)
    }
  }, [])

  return (
    <div
      className={`cursor-glow ${active ? "is-active" : ""}`}
      style={{ left: pos.x, top: pos.y }}
      aria-hidden
    />
  )
}
