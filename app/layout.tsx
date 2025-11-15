import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"



export const metadata: Metadata = {
  title: "Modern App - Build Better",
  description: "A modern full-stack application with advanced UI and dark mode",
 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    
          <main className="min-h-screen">{children}</main>
    
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
