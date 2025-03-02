"use client"

import type React from "react"

import { ThemeProvider } from "next-themes"
import { LanguageProvider } from "@/lib/language-context"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  )
}

