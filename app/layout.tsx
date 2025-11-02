import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "YNG CEO — FounderOS | The Operating System for Young Entrepreneurs",
  description: "Plan, build, and launch your next business from a single Notion dashboard. FounderOS by YNG CEO.",
  generator: "v0.app",
  icons: {
    icon: "/YNG%20CEO.PNG",
    shortcut: "/YNG%20CEO.PNG",
    apple: "/YNG%20CEO.PNG",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/YNG%20CEO.PNG" sizes="any" />
        <link rel="shortcut icon" href="/YNG%20CEO.PNG" />
        <link rel="apple-touch-icon" href="/YNG%20CEO.PNG" sizes="180x180" />
        <link rel="icon" type="image/png" sizes="512x512" href="/YNG%20CEO.PNG" />
        <link rel="icon" type="image/png" sizes="192x192" href="/YNG%20CEO.PNG" />
        <link rel="icon" type="image/png" sizes="32x32" href="/YNG%20CEO.PNG" />
        <link rel="icon" type="image/png" sizes="16x16" href="/YNG%20CEO.PNG" />
      </head>
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
