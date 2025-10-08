import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mohamed Aziz Aguir | Cybersecurity Engineer",
  description:
    "Cybersecurity engineering student specializing in SOC architecture, threat intelligence, and AI-driven defensive automation.",
  generator: "v0.app",
  keywords: ["cybersecurity", "SOC", "threat intelligence", "security engineer", "CTI", "penetration testing"],
  authors: [{ name: "Mohamed Aziz Aguir" }],
  openGraph: {
    title: "Mohamed Aziz Aguir | Cybersecurity Engineer",
    description:
      "Cybersecurity engineering student specializing in SOC architecture, threat intelligence, and AI-driven defensive automation.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
