'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For now just simulate submission
    setSubmitted(true)
  }

  return (
    <section className="container mx-auto px-4 py-20 max-w-3xl">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      {submitted ? (
        <p className="text-center text-green-600">Thank you for your message! I will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="textarea textarea-bordered w-full"
          />
          <Button type="submit" className="self-center px-12">
            Send
          </Button>
        </form>
      )}
    </section>
  )
}

