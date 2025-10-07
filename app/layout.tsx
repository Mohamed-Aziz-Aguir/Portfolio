import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

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
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
