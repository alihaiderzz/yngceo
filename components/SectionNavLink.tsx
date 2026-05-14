"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const HASH_PATH = /^\/#([\w-]+)$/

type Props = {
  href: string
  children: ReactNode
}

/**
 * Same-origin section links: on `/` use real hash anchors so the browser
 * respects `scroll-padding-top` / `scroll-margin-top`. Off-home, use `Link`
 * to `/` + hash; {@link HomeHashScroll} finishes the scroll after navigation.
 */
export function SectionNavLink({ href, children }: Props) {
  const pathname = usePathname()
  const m = href.match(HASH_PATH)

  if (m && pathname === "/") {
    return <a href={`#${m[1]}`}>{children}</a>
  }

  return <Link href={href}>{children}</Link>
}
