"use client"

import { useTranslation } from "@/lib/use-translation"

export function Features() {
  const { t } = useTranslation()
  
  const features = [
    {
      name: t("features.items.management.title"),
      description: t("features.items.management.description"),
    },
    {
      name: t("features.items.profiles.title"),
      description: t("features.items.profiles.description"),
    },
    {
      name: t("features.items.performance.title"),
      description: t("features.items.performance.description"),
    },
    {
      name: t("features.items.security.title"),
      description: t("features.items.security.description"),
    },
    {
      name: t("features.items.design.title"),
      description: t("features.items.design.description"),
    },
    {
      name: t("features.items.advanced.title"),
      description: t("features.items.advanced.description"),
    },
  ]

  return (
    <div className="py-24 sm:py-32" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            AsulCFG Manager
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {t("features.title")}
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {t("features.subtitle")}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-lg font-semibold leading-7">
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

