import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, request: prayerRequest } = body

    // Validate required fields
    if (!prayerRequest || prayerRequest.trim().length === 0) {
      return NextResponse.json(
        { error: 'Prayer request is required' },
        { status: 400 }
      )
    }

    // Get environment variables
    const apiKey = process.env.RESEND_API_KEY
    const recipientEmail = process.env.PRAYER_RECIPIENT_EMAIL || 'prayer@vancouvercityblessing.com'
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
