import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Screenshots } from "@/components/screenshots"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      <Features />
      <Screenshots />
    </div>
  )
}

