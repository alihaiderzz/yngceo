"use client"

import Link from "next/link"
import { SectionNavLink } from "@/components/SectionNavLink"
import { MarketSessionsClock } from "@/components/MarketSessionsClock"
import Ticker from "@/components/Ticker"
import { ThemeToggle } from "@/components/ThemeToggle"

type NavLink = { href: string; label: string }

const DEFAULT_LINKS: NavLink[] = [
  { href: "/#thesis", label: "Thesis" },
  { href: "/#markets", label: "Markets" },
  { href: "/#business", label: "Business" },
  { href: "/#signal", label: "Signal" },
]

export function SiteHeader({
  navLinks = DEFAULT_LINKS,
}: {
  navLinks?: NavLink[]
}) {
  return (
    <header className="site-header">
      <div className="site-nav">
        <Link href="/" className="site-nav__brand" aria-label="YNG CEO home">
          <img
            src="/logo.png"
            alt=""
            width={966}
            height={978}
            className="site-nav__logo"
            decoding="async"
            fetchPriority="high"
          />
        </Link>
        <nav className="site-nav__links" aria-label="Primary">
          {navLinks.map((l) => (
            <SectionNavLink key={l.href} href={l.href}>
              {l.label}
            </SectionNavLink>
          ))}
        </nav>
        <div className="site-nav__right">
          <ThemeToggle />
          <MarketSessionsClock />
        </div>
      </div>
      <div className="ticker-wrap">
        <div className="ticker-rail" aria-label="Simulated watchlist ticker">
          <div className="ticker-pill">
            <span className="ticker-pill__pulse" aria-hidden />
            <span className="ticker-pill__text">Watchlist</span>
          </div>
          <Ticker />
        </div>
      </div>
    </header>
  )
}
