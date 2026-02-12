import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { checkRateLimit } from '@/lib/rate-limit'

export async function POST(request: Request) {
  try {
    // Spam: rate limit by IP
    const rate = checkRateLimit(request)
    if (!rate.ok) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: rate.retryAfter ? { 'Retry-After': String(rate.retryAfter) } : undefined }
      )
    }

    const body = await request.json()
    const { name, email, request: prayerRequest, website: honeypot } = body

    // Spam: honeypot (hidden field; bots fill it)
    if (honeypot && String(honeypot).trim()) {
      return NextResponse.json({ success: true, message: 'Prayer request submitted successfully' })
    }

    // Validate required fields
    if (!prayerRequest || prayerRequest.trim().length === 0) {
      return NextResponse.json(
        { error: 'Prayer request is required' },
        { status: 400 }
      )
    }

    // Get environment variables (no fallbacks)
    const apiKey = process.env.RESEND_API_KEY
    const recipientEmail = process.env.PRAYER_RECIPIENT_EMAIL
    const fromEmail = process.env.RESEND_FROM_EMAIL

    if (!apiKey || !recipientEmail || !fromEmail) {
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      )
    }

    // Initialize Resend inside the function
    const resend = new Resend(apiKey)

    // replyTo only when submitter provided an email (optional field)
    const replyTo = email && email.trim() ? email : undefined

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      ...(replyTo && { replyTo }),
      subject: 'New Prayer Request',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4A5941;">New Prayer Request</h2>
          ${name ? `<p><strong>Name:</strong> ${name}</p>` : ''}
          ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
          <p><strong>Prayer Request:</strong></p>
          <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${prayerRequest}</p>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This prayer request was submitted through the City Blessing Church website.
          </p>
        </div>
      `,
      text: `
New Prayer Request

${name ? `Name: ${name}` : ''}
${email ? `Email: ${email}` : ''}

Prayer Request:
${prayerRequest}

---
This prayer request was submitted through the Vancouver City Blessing website.
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, message: 'Prayer request submitted successfully' })
  } catch (error) {
    console.error('Prayer form error:', error)
    return NextResponse.json(
      { error: 'Failed to process prayer request' },
      { status: 500 }
    )
  }
}
