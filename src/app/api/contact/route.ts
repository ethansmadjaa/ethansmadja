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

// Function to verify reCAPTCHA token
async function verifyCaptcha(token: string) {
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Error verifying CAPTCHA:', error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const { name, email, subject, message, captchaToken } = await request.json();

    // Validate input
    if (!name || !email || !subject || !message || !captchaToken) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify CAPTCHA
    const isValidCaptcha = await verifyCaptcha(captchaToken);
    if (!isValidCaptcha) {
      return NextResponse.json(
        { success: false, message: 'Invalid CAPTCHA verification' },
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