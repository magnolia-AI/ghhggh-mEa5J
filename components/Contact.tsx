'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'

interface FormData {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const { register, handleSubmit, reset } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    alert(`Thank you, ${data.name}! Your message has been received.`)
    reset()
  }

  return (
    <section className="container mx-auto px-4 py-20 max-w-3xl">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          {...register('name', { required: true })}
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full"
          required
        />
        <input
          {...register('email', { required: true })}
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full"
          required
        />
        <textarea
          {...register('message', { required: true })}
          placeholder="Your Message"
          className="textarea textarea-bordered w-full"
          rows={5}
          required
        />
        <Button type="submit" className="self-center px-12">
          Send
        </Button>
      </form>
    </section>
  )
}

