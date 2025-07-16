import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Providers } from "./providers"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToSection } from "@/components/scroll-to-section"

export const metadata: Metadata = {
  title: "AsulCFG Manager",
  description: "一款现代化的 CS2 配置文件管理工具，采用 Fluent 设计语言打造",
  icons: {
    icon: "/icon/favicon.ico"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className="font-sans">
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <ScrollToSection />
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}



import './globals.css'