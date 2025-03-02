"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/use-translation"
import { Download, ArrowRight } from "lucide-react"

export function Hero() {
  const { t } = useTranslation()
  
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {t("hero.description")}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/download" className="flex items-center">
                <Download className="mr-2 h-5 w-5" />
                {t("hero.download")}
              </Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="#features" className="flex items-center">
                {t("hero.learnMore")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* 背景装饰 */}
      <div className="absolute -z-10 top-0 left-0 right-0 bottom-0 opacity-30 dark:opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl"></div>
      </div>
    </div>
  )
}

