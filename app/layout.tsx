import type { Metadata, Viewport } from "next"
import { Inter, Space_Mono, Syne } from "next/font/google"
import type React from "react"
import { ClientEffects } from "@/components/ClientEffects"
import { CursorGlow } from "@/components/CursorGlow"
import { FilmGrain } from "@/components/FilmGrain"
import { SimulatedWatchlistProvider } from "@/components/SimulatedWatchlistProvider"
import { ThemeScript } from "@/components/ThemeScript"
import "./globals.css"
import "./ticker-sim.css"

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne-fallback",
  display: "swap",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono-fallback",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sessions-fallback",
  display: "swap",
})

const siteDescription =
  "Finance, business, entrepreneurship, markets, ventures — structured thinking for modern operators."

export const metadata: Metadata = {
  metadataBase: new URL("https://yngceo.com"),
  applicationName: "YNG CEO",
  title: {
    default: "YNG CEO",
    template: "%s · YNG CEO",
  },
  description: siteDescription,
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    title: "YNG CEO",
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    type: "website",
    siteName: "YNG CEO",
    url: "https://yngceo.com",
    title: "YNG CEO",
    description: siteDescription,
    locale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 966,
        height: 978,
        alt: "YNG CEO",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "YNG CEO",
    description: siteDescription,
    images: ["/logo.png"],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#060606" },
    { media: "(prefers-color-scheme: light)", color: "#f4f4f1" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${spaceMono.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeScript />
        <FilmGrain />
        <CursorGlow />
        <ClientEffects>
          <SimulatedWatchlistProvider>
            <div className="page-stack">{children}</div>
          </SimulatedWatchlistProvider>
        </ClientEffects>
      </body>
    </html>
  )
}
