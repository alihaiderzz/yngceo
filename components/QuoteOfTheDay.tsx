"use client"

import { useEffect, useState } from "react"
import { pickQuoteForLocalDate, type CuratedQuote } from "@/lib/quotes"

export function QuoteOfTheDay() {
  const [quote, setQuote] = useState<CuratedQuote | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const q = pickQuoteForLocalDate(new Date())
    setQuote(q)
    const t = window.requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(t)
  }, [])

  if (!quote) return <div className="quote-day quote-day--placeholder" aria-hidden />

  return (
    <figure className={`quote-day ${visible ? "quote-day--visible" : ""}`}>
      <blockquote className="quote-day__text">&ldquo;{quote.text}&rdquo;</blockquote>
      <figcaption className="quote-day__author">{quote.author}</figcaption>
    </figure>
  )
}
