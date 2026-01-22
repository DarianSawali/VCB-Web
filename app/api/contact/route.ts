import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || name.trim().length === 0) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      )
    }

    if (!email || email.trim().length === 0) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    if (!message || message.trim().length === 0) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Get environment variables
    const apiKey = process.env.RESEND_API_KEY
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || process.env.PRAYER_RECIPIENT_EMAIL || 'contact@vancouvercityblessing.com'
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      )
    }

    // Initialize Resend inside the function
    const resend = new Resend(apiKey)

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      subject: 'New Contact Form Submission - Carecell Inquiry',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4A5941;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</p>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This contact form submission was received through the City Blessing Church website.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission - Carecell Inquiry

Name: ${name}
Email: ${email}

Message:
${message}

---
This contact form submission was received through the Vancouver City Blessing website.
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, message: 'Contact form submitted successfully' })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    )
  }
}
