'use client'

import { Button } from '@/components/ui/button'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-full">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-24 pb-20 text-center">
        <h1 className="text-6xl font-extrabold tracking-tight">Anders</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-xl mx-auto">
          A passionate lover of corgis and a friendly soul.
        </p>
        <Button
          variant="outline"
          size="lg"
          className="mt-8"
          onClick={() => alert('Welcome to my portfolio!')}
        >
          Say Hi!
        </Button>
      </section>

      {/* About Section */}
      <About />

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section */}
      <Contact />
    </main>
  )
}

