"use client"

import Link from "next/link"
import { Github } from "lucide-react"
import { useTranslation } from "@/lib/use-translation"

export function Footer() {
  const { t } = useTranslation()
  
  return (
    <footer className="border-t border-border/50 py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} AsulCFG Manager. {t("footer.rights")}
            </p>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link
              href="https://github.com/Asultop/Re-AsulCFGManager"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

