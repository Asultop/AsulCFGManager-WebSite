"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog"
import { DefaultImage } from "./default-image"
import { t } from "@/lib/i18n"

type Screenshot = {
  id: string
  src: string
  alt: string
}

export function Screenshots() {
  const [selectedImage, setSelectedImage] = useState<Screenshot | null>(null)
  const [screenshots, setScreenshots] = useState<Screenshot[]>([])
  const [loading, setLoading] = useState(true)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  useEffect(() => {
    // 设置默认的截图数据
    setScreenshots([
      {
        id: "1",
        src: "/screenshots/01-main-screen.png",
        alt: "AsulCFG Manager 主界面",
      },
      {
        id: "2",
        src: "/screenshots/02-config-editor.png",
        alt: "配置编辑器",
      },
      {
        id: "3",
        src: "/screenshots/03-config-management.png",
        alt: "配置文件管理",
      },
      {
        id: "4",
        src: "/screenshots/04-usersetting-viewer.png",
        alt: "配置预览",
      },
    ])
    setLoading(false)
  }, [])

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }))
  }

  return (
    <section id="screenshots" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("screenshots.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("screenshots.subtitle")}</p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {screenshots.map((screenshot, index) => (
              <Card key={screenshot.id} className="fluent-card overflow-hidden group">
                <div className="relative aspect-video cursor-zoom-in" onClick={() => setSelectedImage(screenshot)}>
                  {imageErrors[screenshot.id] ? (
                    <DefaultImage index={index} className="rounded-t-lg" />
                  ) : (
                    <Image
                      src={screenshot.src || "/placeholder.svg"}
                      alt={screenshot.alt}
                      fill
                      className="object-cover transition-transform group-hover:scale-105 duration-300"
                      onError={() => handleImageError(screenshot.id)}
                    />
                  )}
                </div>
                <div className="p-4">
                  <p className="text-sm text-center text-muted-foreground">{screenshot.alt}</p>
                </div>
              </Card>
            ))}
          </div>
        )}

        <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="max-w-[90vw] h-[90vh] sm:max-w-[80vw] sm:h-[80vh]">
            <div className="relative h-full w-full">
              {selectedImage && (
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 90vw, 80vw"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

