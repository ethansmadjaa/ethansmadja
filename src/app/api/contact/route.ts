import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactConfirmationEmail from '@/emails/contact-confirmation';
import ContactNotificationEmail from '@/emails/contact-notification';

// Mark this route as dynamic to prevent static rendering
export const dynamic = 'force-dynamic';

// Initialize Resend with your API key
// You'll need to add this to your environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Your email address where you want to receive contact notifications
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'ethan@smadja.biz';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const { name, email, subject, message } = await request.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send confirmation email to the user
    await resend.emails.send({
      from: 'Ethan SMADJA <contact@ethansmadja.com>', // Using your custom domain email
      to: email,
      subject: 'Thank you for contacting Ethan Smadja',
      react: ContactConfirmationEmail({ name }),
    });

    // Send notification email to the admin
    await resend.emails.send({
      from: 'Ethan SMADJA <contact@ethansmadja.com>', // Using your custom domain email
      to: ADMIN_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      react: ContactNotificationEmail({ name, email, subject, message }),
    });

    return NextResponse.json(
      { success: true, message: 'Your message has been sent' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    );
  }
} 