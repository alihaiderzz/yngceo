import { HomeHashScroll } from "@/components/HomeHashScroll"
import { QuoteOfTheDay } from "@/components/QuoteOfTheDay"
import { SectionDots } from "@/components/SectionDots"
import { SiteFooter } from "@/components/SiteFooter"
import { SiteHeader } from "@/components/SiteHeader"
import { TerminalGrid } from "@/components/TerminalGrid"

const THESIS = [
  { n: "01", t: "luxury is leverage" },
  { n: "02", t: "attention compounds" },
  { n: "03", t: "silence scales" },
  { n: "04", t: "markets reward clarity" },
  { n: "05", t: "execution compounds edge" },
  { n: "06", t: "still becoming" },
] as const

const SIGNAL_ITEMS = [
  "Weekly market insights — structure, levels, macro context.",
  "Business observations — incentives, distribution, execution.",
  "Entrepreneur and trader thinking — patterns without noise.",
  "Macro and liquidity commentary in plain terms.",
  "Cancel anytime. Access is the point.",
] as const

const BUSINESS_LINES = [
  "ENVISION YOUR SUCCESS.",
  "Execution, markets, and business insight — one thread.",
  "Structured thinking for modern operators.",
] as const

const BUSINESS_MANIFESTO: { title: string; paragraphs: string[] } = {
  title: "We Get It",
  paragraphs: [
    "We are all hustlers. Young CEOs building our empires before the sun rises and long after it sets. Every single day, we wake up chasing something bigger—that dream car, that dream home, that life of complete freedom.",
    'We scroll through Instagram, seeing success stories and thinking, "That could be me." We stay up late, working on side hustles while our friends are out. We skip the parties, skip the "normal" life, because we\'re obsessed with one thing: making it happen.',
    "The grind is real. The late nights are real. The doubt and the fear—they're all real. But so is the vision. So is the hunger. So is that burning desire to create something that's completely ours.",
    "YNGCEO SIGNAL is not just a feed. It is a private stream of thinking built for the ones already in motion — traders, founders, and operators who do not need motivation, they need clarity. Market observations, business patterns, operator-level perspective. Pattern recognition over prediction. A sharper lens for reading what moves, what compounds, and what matters before the moment passes. Private Discord included. For the ones who know the difference between signal and noise.",
    "The life you want exists. The business you're building will work. The freedom you're chasing is closer than you think. Let's make it happen.",
  ],
}

export default function HomePage() {
  return (
    <>
      <HomeHashScroll />
      <SiteHeader />
      <SectionDots />
      <main>
        <section id="home" aria-label="Home">
          <div className="hero-inner">
            <h1 className="hero-title">
              <span className="hero-title__solid">YNG</span>
              <span className="hero-title__ghost">CEO</span>
          </h1>
            <p className="hero-sub">
              finance · business · entrepreneurship · markets · ventures
            </p>
            <a className="hero-enter" href="#identity">
              Enter
            </a>
        </div>
      </section>

        <section id="identity" className="section section--identity" aria-labelledby="identity-heading">
          <h2 id="identity-heading" className="sr-only">
            Positioning
          </h2>
          <div className="identity reveal">
            <p className="identity__lead">Built for those in motion.</p>
            <p className="identity__body">
              Markets, business, and execution are not separate paths — they are
              one system. This is where thinking becomes structured and attention
              becomes direction.
            </p>
            <p className="identity__body identity__body--dim">
              A live financial intelligence identity hub for ambitious builders —
              perspective, discussion, and market thinking without noise.
              </p>
            </div>
        </section>

        <section id="thesis" className="section section--tight-top" aria-labelledby="thesis-heading">
          <h2 id="thesis-heading" className="section-heading">
            Thesis
          </h2>
          <div className="thesis-grid">
            {THESIS.map((cell, i) => (
              <article
                key={cell.n}
                className="thesis-cell reveal"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="thesis-cell__num">{cell.n}</span>
                <p className="thesis-cell__text">{cell.t}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="markets" className="section" aria-labelledby="markets-heading">
          <h2 id="markets-heading" className="section-heading">
            Markets
          </h2>
          <div className="reveal">
            <TerminalGrid />
        </div>
      </section>

        <section id="business" className="section section--business" aria-labelledby="business-heading">
          <h2 id="business-heading" className="section-heading">
            Business
          </h2>
          <div className="business-block reveal">
            <div className="business-manifesto">
              <h3 className="business-manifesto__title">{BUSINESS_MANIFESTO.title}</h3>
              {BUSINESS_MANIFESTO.paragraphs.map((p, i) => (
                <p key={i} className="business-manifesto__p">
                  {p}
                </p>
              ))}
            </div>
            <QuoteOfTheDay />
            <ul className="business-block__list">
              {BUSINESS_LINES.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
        </div>
      </section>

        <section id="signal" className="section" aria-labelledby="signal-heading">
          <div className="signal reveal">
            <div>
              <h2 id="signal-heading" className="signal__head">
                SIGNAL
              </h2>
              <p className="signal__tagline">
                Signal access for builders, traders, and entrepreneurs.
              </p>
              <p className="signal__body">
                Weekly market insights, business observations, and
                entrepreneur–trader thinking: patterns and macro commentary.
                Perspective, discussion, and access to how the thinking is
                framed.
              </p>
              <p className="signal__price">$10 / month</p>
              <a
                href="https://whop.com/joined/yng-ceo/products/founderos-af/"
                className="signal__cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request Access
              </a>
            </div>
            <ul className="signal__list">
              {SIGNAL_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
