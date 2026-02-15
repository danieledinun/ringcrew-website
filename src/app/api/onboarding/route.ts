import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Initialize Resend only when needed
    const resend = new Resend(process.env.RESEND_API_KEY || '');

    // Email to admin (Daniele) with complete form data
    await resend.emails.send({
      from: 'RingCrew <onboarding@resend.dev>',
      to: 'danieledinunziosf@gmail.com',
      replyTo: data.email,
      subject: `🚀 New Signup: ${data.businessName} (${data.industry})`,
      html: `
        <h2>New RingCrew Signup - Action Required</h2>
        <p>A new customer has signed up and is ready for onboarding!</p>

        <h3>📋 Business Information</h3>
        <p><strong>Business Name:</strong> ${data.businessName}</p>
        <p><strong>Contact Person:</strong> ${data.contactName}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
        <p><strong>Industry:</strong> ${data.industry}</p>
        <p><strong>Website:</strong> ${data.website || 'N/A'}</p>

        <h3>🛠️ Services & Coverage</h3>
        <p><strong>Services Offered:</strong><br>${data.services}</p>
        <p><strong>Service Area:</strong> ${data.serviceArea || 'Not specified'}</p>
        <p><strong>Emergency Services:</strong> ${data.hasEmergency === 'yes' ? 'Yes' : 'No'}</p>
        ${data.hasEmergency === 'yes' ? `<p><strong>Emergency Examples:</strong><br>${data.emergencyExamples}</p>` : ''}

        <h3>💬 Customer Questions & Pricing</h3>
        <p><strong>Common Customer Questions:</strong><br>${data.commonQuestions}</p>
        <p><strong>Pricing Approach:</strong> ${data.pricingApproach}</p>
        ${data.priceRanges ? `<p><strong>Price Ranges:</strong><br>${data.priceRanges}</p>` : ''}

        <h3>📅 Booking Setup</h3>
        <p><strong>Current Booking Tools:</strong> ${data.bookingTools?.join(', ') || 'None'}</p>
        <p><strong>Booking Preference:</strong> ${data.bookingPreference}</p>

        <h3>📞 Phone & Voice Setup</h3>
        <p><strong>Phone Setup Method:</strong> ${data.phoneSetup}</p>
        <p><strong>Voice Preference:</strong> ${data.voicePreference || 'No preference'}</p>
        ${data.specialNotes ? `<p><strong>Special Notes:</strong><br>${data.specialNotes}</p>` : ''}

        <hr>
        <p><strong>Next Steps:</strong></p>
        <ol>
          <li>Review the information above</li>
          <li>Set up their AI receptionist based on their preferences</li>
          <li>Provide them with a test phone number within 24 hours</li>
          <li>Email them at <a href="mailto:${data.email}">${data.email}</a> when ready</li>
        </ol>
      `,
    });

    // Confirmation email to prospect
    await resend.emails.send({
      from: 'RingCrew <onboarding@resend.dev>',
      to: data.email,
      replyTo: 'hello@ringcrew.ai',
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
