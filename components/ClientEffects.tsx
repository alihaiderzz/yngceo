"use client"

import { usePathname } from "next/navigation"
import { ScrollReveal } from "@/components/ScrollReveal"

export function ClientEffects({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <>
      <ScrollReveal key={pathname} />
      {children}
    </>
  )
}
