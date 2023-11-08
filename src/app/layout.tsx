import { Metadata } from "next"
import localFont from "next/font/local"

import "github-markdown-css"
import "./globals.css"

import Navigation from "@/components/navigation"
import { ThreadsProvider } from "@/hooks/use-threads"
import { NavigationProvider } from "@/hooks/use-navigation"
import NavigationToggle from "@/components/navigation-toggle"

const sourceSans = localFont({
  preload: true,
  display: "swap",
  fallback: ["sans-serif"],
  variable: "--font-source-sans-pro",
  src: [
    {
      weight: "400",
      style: "normal",
      path: "../fonts/SourceSansPro-Regular.ttf",
    },
    {
      weight: "600",
      style: "normal",
      path: "../fonts/SourceSansPro-SemiBold.ttf",
    },
    {
      weight: "700",
      style: "normal",
      path: "../fonts/SourceSansPro-Bold.ttf",
    },
  ],
})

const dancingScript = localFont({
  preload: true,
  display: "swap",
  fallback: ["serif"],
  variable: "--font-dancing-script",
  src: [
    {
      weight: "400",
      style: "normal",
      path: "../fonts/DancingScript-Regular.ttf",
    },
  ],
})

const sourceCode = localFont({
  weight: "400",
  preload: true,
  style: "normal",
  display: "swap",
  fallback: ["monospace"],
  variable: "--font-source-code-pro",
  src: "../fonts/SourceCodePro-Regular.ttf",
})

export const metadata: Metadata = {
  title: "LegIA - Home",
  description: "LegIA, l'application juridique basée sur l'IA",
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${sourceCode.variable} ${dancingScript.variable}`}
    >
      <head />
      <body>
        <NavigationProvider>
          <ThreadsProvider>
            <Navigation />
            <main>
              <NavigationToggle />
              {children}
            </main>
          </ThreadsProvider>
        </NavigationProvider>
      </body>
    </html>
  )
}

export default Layout
