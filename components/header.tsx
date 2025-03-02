"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Menu, X, Github, Download } from "lucide-react"
import { useTranslation } from "@/lib/use-translation"

export function Header() {
  const { t } = useTranslation()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.features"), href: "/#features" },
    { name: t("nav.screenshots"), href: "/#screenshots" },
    { name: t("nav.download"), href: "/download" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">AsulCFG Manager</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navigation.slice(0, -1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-foreground/80 text-foreground ${
                  pathname === item.href ? "text-primary" : ""
                }`}
                onClick={() => {
                  if (item.href.includes("#") && pathname === "/") {
                    const element = document.getElementById(item.href.split("#")[1])
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* 移动端菜单按钮 */}
        <div className="flex md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mr-2"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <Link href="/" className="flex items-center">
            <span className="font-bold">AsulCFG Manager</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            <Button asChild className="hidden md:flex">
              <Link href="/download">
                <Download className="mr-2 h-5 w-5" />
                {t("nav.download")}
              </Link>
            </Button>
            <Link
              href="https://github.com/Asultop/AsulCFGManager"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <ThemeToggle />
            <LanguageSwitcher />
          </nav>
        </div>
      </div>

      {/* 移动端菜单 */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 p-4 bg-background border-t">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-left transition-colors hover:text-foreground/80 text-foreground ${
                  pathname === item.href ? "text-primary" : ""
                }`}
                onClick={() => {
                  setIsMenuOpen(false)
                  if (item.href.includes("#") && pathname === "/") {
                    const element = document.getElementById(item.href.split("#")[1])
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

