"use client"

import { useEffect, useRef } from "react"

export function FilmGrain() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let raf = 0
    let frame = 0

    const resize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      canvas.width = w
      canvas.height = h
    }

    const tick = () => {
      frame += 1
      if (frame % 3 === 0) {
        const w = canvas.width
        const h = canvas.height
        if (w <= 0 || h <= 0) {
          raf = requestAnimationFrame(tick)
          return
        }
        const imageData = ctx.createImageData(w, h)
        const buf = imageData.data
        for (let i = 0; i < buf.length; i += 4) {
          const g = (Math.random() * 255) | 0
          buf[i] = g
          buf[i + 1] = g
          buf[i + 2] = g
          buf[i + 3] = 255
        }
        ctx.putImageData(imageData, 0, 0)
      }
      raf = requestAnimationFrame(tick)
    }

    resize()
    window.addEventListener("resize", resize)
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return <canvas ref={ref} className="grain-canvas" aria-hidden />
}
