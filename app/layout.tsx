import type React from "react"
import type { Metadata } from "next"
import { Archivo } from "next/font/google";

import "@/styles/globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Production App",
  description: "Enterprise-grade Next.js 15 fullstack application",
  viewport: "width=device-width, initial-scale=1"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${archivo.className} antialiased`}>{children}</body>
    </html>
  )
}
