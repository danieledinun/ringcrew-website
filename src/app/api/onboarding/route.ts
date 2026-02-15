import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Initialize Resend only when needed
    const resend = new Resend(process.env.RESEND_API_KEY || '');

    // Email to business owner with form data
    await resend.emails.send({
      from: 'RingCrew <noreply@ringcrew.ai>',
      to: process.env.ADMIN_EMAIL || 'your-email@example.com', // Replace with actual email
      subject: `🚀 New Signup: ${data.businessName} (${data.industry})`,
      html: `
        <h2>New RingCrew Signup</h2>
        <p><strong>Business:</strong> ${data.businessName}</p>
        <p><strong>Contact:</strong> ${data.contactName} — ${data.email} — ${data.phone}</p>
        <p><strong>Industry:</strong> ${data.industry}</p>
        <p><strong>Website:</strong> ${data.website || 'N/A'}</p>
        <hr>
        <p><strong>Services:</strong> ${data.services}</p>
        <p><strong>Service Area:</strong> ${data.serviceArea || 'N/A'}</p>
        <p><strong>Emergency:</strong> ${data.hasEmergency === 'yes' ? data.emergencyExamples : 'No'}</p>
        <hr>
        <p><strong>Common Questions:</strong> ${data.commonQuestions}</p>
        <p><strong>Pricing Approach:</strong> ${data.pricingApproach}</p>
        <p><strong>Price Ranges:</strong> ${data.priceRanges || 'N/A'}</p>
        <hr>
        <p><strong>Booking Tools:</strong> ${data.bookingTools?.join(', ')}</p>
        <p><strong>Booking Preference:</strong> ${data.bookingPreference}</p>
        <hr>
        <p><strong>Phone Setup:</strong> ${data.phoneSetup}</p>
        <p><strong>Voice Preference:</strong> ${data.voicePreference || 'No preference'}</p>
        <p><strong>Special Notes:</strong> ${data.specialNotes || 'None'}</p>
      `,
    });

    // Confirmation email to prospect
    await resend.emails.send({
      from: 'RingCrew <hello@ringcrew.ai>',
      to: data.email,
      subject: "Welcome to RingCrew — We're Building Your AI Receptionist 🎉",
      html: `
        <h2>Hi ${data.contactName}!</h2>
        <p>Thanks for signing up! We're building your AI receptionist for <strong>${data.businessName}</strong> right now.</p>
        <p><strong>What happens next:</strong></p>
        <ul>
          <li>Within 24 hours, we'll send you a test phone number</li>
          <li>Call it, try different scenarios, let us know what to tweak</li>
          <li>Once you approve, we go live — your 7-day free trial starts</li>
        </ul>
        <p>Questions? Just reply to this email.</p>
        <p>— The RingCrew Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing onboarding:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
