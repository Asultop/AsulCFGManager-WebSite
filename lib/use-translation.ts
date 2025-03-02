"use client"

import { useLanguage } from "./language-context"
import { t as translate } from "./i18n"

export function useTranslation() {
  const { forceUpdate } = useLanguage()
  
  const t = (key: string) => {
    // forceUpdate 被依赖但不直接使用，用于触发重渲染
    return translate(key)
  }

  return { t }
} 