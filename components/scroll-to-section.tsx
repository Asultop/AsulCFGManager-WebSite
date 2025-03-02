"use client"

import { useEffect } from "react"

export function ScrollToSection() {
  useEffect(() => {
    // 检查URL中是否有hash
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash)
      if (element) {
        // 使用平滑滚动
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, []) // 当路由或参数改变时重新执行

  return null
}

