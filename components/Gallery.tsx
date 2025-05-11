import React from 'react'

const corgiImages = [
  "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1601758174559-0e0d4f1a0a4b?auto=format&fit=crop&w=800&q=80",
]

export default function Gallery() {
  return (
    <section className="container mx-auto px-4 py-20 max-w-5xl">
      <h2 className="text-3xl font-bold mb-6 text-center">Corgi Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {corgiImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Corgi ${i + 1}`}
            className="rounded-lg shadow-md object-cover w-full h-48"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  )
}

