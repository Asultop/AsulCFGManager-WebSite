"use client"

import { Settings2, Sliders, Command } from "lucide-react"

interface DefaultImageProps {
  index: number
  className?: string
}

export function DefaultImage({ index, className = "" }: DefaultImageProps) {
  // 根据索引选择不同的图标，循环使用这三个图标
  const icons = [
    <Settings2 key="settings" className="w-12 h-12" />,
    <Sliders key="sliders" className="w-12 h-12" />,
    <Command key="command" className="w-12 h-12" />,
  ]

  const selectedIcon = icons[index % icons.length]

  return (
    <div className={`w-full h-full flex items-center justify-center bg-muted ${className}`}>
      <div className="text-muted-foreground">{selectedIcon}</div>
    </div>
  )
}

