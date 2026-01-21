'use client'

import { useState, FormEvent } from 'react'

export default function PrayerForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [request, setRequest] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Validate required field
    if (!request.trim()) {
      setErrorMessage('Please enter your prayer request')
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/prayer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim() || undefined,
          email: email.trim() || undefined,
          request: request.trim(),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit prayer request')
      }

      // Success
      setSubmitStatus('success')
      setName('')
      setEmail('')
      setRequest('')
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Prayer form submission error:', error)
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit prayer request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
      <h4 className="text-lg text-secondary mb-4">Prayer Request</h4>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-700 mb-1" htmlFor="name">
            Name (optional)
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/60 focus:border-secondary/60"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1" htmlFor="email">
            Email (optional)
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/60 focus:border-secondary/60"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1" htmlFor="request">
            Prayer Request
          </label>
          <textarea
            id="request"
            rows={4}
            value={request}
            onChange={(e) => setRequest(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/60 focus:border-secondary/60"
            required
            disabled={isSubmitting}
          />
        </div>
        
        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md text-sm">
            Thank you for sharing your prayer request. Our team will pray for you.
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md text-sm">
            {errorMessage || 'Failed to submit prayer request. Please try again.'}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-secondary text-white px-8 py-2 rounded-full text-sm font-medium hover:bg-secondary/90 transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Request'}
        </button>
      </form>
    </div>
  )
}
