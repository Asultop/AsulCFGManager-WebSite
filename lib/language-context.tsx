"use client"

import { createContext, useContext, useState, useEffect } from "react"
import type { Language } from "./i18n"
import { getCurrentLanguage, setCurrentLanguage } from "./i18n"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  forceUpdate: number
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getCurrentLanguage())
  const [forceUpdate, setForceUpdate] = useState(0)

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "zh" || savedLanguage === "en")) {
      setLanguageState(savedLanguage)
      setCurrentLanguage(savedLanguage)
    }
  }, [])

  const handleLanguageChange = (lang: Language) => {
    setLanguageState(lang)
    setCurrentLanguage(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang
    setForceUpdate(prev => prev + 1) // 强制更新所有使用翻译的组件
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, forceUpdate }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
} 