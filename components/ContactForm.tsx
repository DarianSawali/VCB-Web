'use client'

import { useState, FormEvent } from 'react'

interface ContactFormProps {
  onClose?: () => void
}

export default function ContactForm({ onClose }: ContactFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Validate required fields
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage('Please fill in all required fields')
      setSubmitStatus('error')
      return
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address')
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit contact form')
      }

      // Success
      setSubmitStatus('success')
      setName('')
      setEmail('')
      setMessage('')
      
      // Reset success message after 5 seconds and close if onClose provided
      setTimeout(() => {
        setSubmitStatus('idle')
        if (onClose) {
          onClose()
        }
      }, 5000)
    } catch (error) {
      console.error('Contact form submission error:', error)
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-lg text-secondary">Contact Us</h4>
        {onClose && (
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close form"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-700 mb-1" htmlFor="contact-name">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/60 focus:border-secondary/60"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1" htmlFor="contact-email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/60 focus:border-secondary/60"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1" htmlFor="contact-message">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="contact-message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/60 focus:border-secondary/60"
            required
            disabled={isSubmitting}
            placeholder="Tell us about yourself and what you&apos;re looking for in a Carecell..."
          />
        </div>
        
        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md text-sm">
            Thank you for reaching out! We&apos;ll get back to you soon.
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md text-sm">
            {errorMessage || 'Failed to submit form. Please try again.'}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-secondary text-white px-8 py-2 rounded-full text-sm font-medium hover:bg-secondary/90 transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
