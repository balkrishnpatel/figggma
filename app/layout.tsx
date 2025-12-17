import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <ScrollToTop />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
  generator: "v0.dev",
}

import "./globals.css"

import "./globals.css"

import "./globals.css"

import "./globals.css"

import "./globals.css"

import "./globals.css"

import "./globals.css"

import "./globals.css"

import "./globals.css"

import "./globals.css"

import "./globals.css"

import "./globals.css"

import "./globals.css"

import "./globals.css"

import "./globals.css"

import "./globals.css"

import "./globals.css"

import "./globals.css"

import "./globals.css"

import "./globals.css"



import './globals.css'