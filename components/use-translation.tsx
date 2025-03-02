"use client"

import { useContext } from "react"
import { LanguageContext } from "./language-provider"
import { translations } from "@/lib/translations"

type NestedObject = {
  [key: string]: string | NestedObject
}

function useTranslation() {
  const context = useContext(LanguageContext)
  
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider")
  }

  const { language } = context

  const t = (key: string) => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        return key
      }
    }

    if (typeof value === "string") {
      return value
    }
    return key
  }

  return { t, language }
}

export default useTranslation

