import type { Metadata } from "next"
import Link from "next/link"
import { SiteFooter } from "@/components/SiteFooter"
import { SiteHeader } from "@/components/SiteHeader"

export const metadata: Metadata = {
  title: "Archive",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
}

const CARDS = [
  {
    title: "Gold as a signal",
    body: "When real rates compress and paper confidence thins, bullion stops being jewellery and becomes a referendum on trust.",
  },
  {
    title: "Trust as an operating system",
    body: "Every commitment is a prediction about future behaviour. The edge is in reading incentives before the crowd prices them.",
  },
  {
    title: "Leverage as real return",
    body: "Not debt for its own sake — asymmetry. Small input, discontinuous outcome. Convexity pays when the path can be survived.",
  },
  {
    title: "Distribution beats product",
    body: "A perfect thesis in a locked notebook compounds at zero. Attention is not vanity; it is liquidity for ideas.",
  },
  {
    title: "Positioning is upstream of everything",
    body: "Entity structure, narrative, capital stack, and market selection — most outcomes are decided before the first trade.",
  },
  {
    title: "Silence is information",
    body: "What is not said in rooms and markets often carries more weight than the headline. Absence moves price too.",
  },
] as const

export default function ArchivePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <header className="archive-hero">
          <h1 className="archive-title reveal">Archive</h1>
          <Link href="/" className="archive-back reveal">
            ← Back
          </Link>
        </header>

        <div className="archive-grid">
          {CARDS.map((c) => (
            <article key={c.title} className="archive-card reveal">
              <h2 className="archive-card__title">{c.title}</h2>
              <p className="archive-card__body">{c.body}</p>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
