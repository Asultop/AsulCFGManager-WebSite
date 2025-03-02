"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, ComputerIcon as Windows } from "lucide-react"
import { useTranslation } from "@/lib/use-translation"

export default function DownloadPage() {
  const { t } = useTranslation()
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">{t("download.title")}</h1>
      <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
        {t("download.description")}
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="fluent-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Windows className="h-5 w-5" />
              {t("download.windows.title")}
            </CardTitle>
            <CardDescription>{t("download.windows.description")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>{t("download.version")}</span>
                <span>v1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span>{t("download.size")}</span>
                <span>25 MB</span>
              </div>
              <div className="flex justify-between">
                <span>{t("download.platform")}</span>
                <Badge variant="secondary">Windows</Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full fluent-button" 
              size="lg"
              asChild
            >
              <a 
                href="https://github.com/Asultop/AsulCFGManager/releases/latest" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Download className="mr-2 h-4 w-4" /> {t("download.windows.button")}
              </a>
            </Button>
          </CardFooter>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="fluent-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">{t("download.macos.title")}</CardTitle>
              <CardDescription>{t("download.macos.description")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>{t("download.status")}</span>
                  <Badge variant="destructive">{t("download.unsupported")}</Badge>
                </div>
                <div className="flex justify-between">
                  <span>{t("download.platform")}</span>
                  <span>{t("download.notAvailable")}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="fluent-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">{t("download.linux.title")}</CardTitle>
              <CardDescription>{t("download.linux.description")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>{t("download.status")}</span>
                  <Badge variant="destructive">{t("download.unsupported")}</Badge>
                </div>
                <div className="flex justify-between">
                  <span>{t("download.platform")}</span>
                  <span>{t("download.notAvailable")}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="fluent-card">
          <CardHeader>
            <CardTitle>{t("download.source.title")}</CardTitle>
            <CardDescription>{t("download.source.description")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>{t("download.repository")}</span>
                <span>GitHub</span>
              </div>
              <div className="flex justify-between">
                <span>{t("download.license")}</span>
                <span>MIT</span>
              </div>
              <div className="flex justify-between">
                <span>{t("download.contribution")}</span>
                <span>{t("download.welcome")}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full fluent-button" variant="outline" size="lg" asChild>
              <a 
                href="https://github.com/Asultop/AsulCFGManager" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                {t("download.source.button")}
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-16 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">{t("download.requirements.title")}</h2>
        <Card className="fluent-card">
          <CardContent className="pt-6">
            <ul className="space-y-2">
              <li>{t("download.requirements.os")}</li>
              <li>{t("download.requirements.cpu")}</li>
              <li>{t("download.requirements.memory")}</li>
              <li>{t("download.requirements.storage")}</li>
              <li>{t("download.requirements.display")}</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

