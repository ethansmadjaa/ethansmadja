import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactConfirmationEmail from '@/emails/contact-confirmation';
import ContactNotificationEmail from '@/emails/contact-notification';

// Mark this route as dynamic to prevent static rendering
export const dynamic = 'force-dynamic';

// Initialize Resend with your API key only if available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Your email address where you want to receive contact notifications
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'ethan@smadja.biz';

// Function to verify hCaptcha token
async function verifyCaptcha(token: string) {
  try {
    const response = await fetch('https://api.hcaptcha.com/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.HCAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Error verifying hCaptcha:', error);
    return false;
  }
}

export async function POST(request: Request) {
  console.log('🚀 Contact API called');
  
  try {
    // Parse the request body
    const { name, email, subject, message, captchaToken } = await request.json();
    
    console.log('📝 Request data:', {
      name: name ? '✅' : '❌',
      email: email ? '✅' : '❌',
      subject: subject ? '✅' : '❌',
      message: message ? '✅' : '❌',
      captchaToken: captchaToken ? '✅' : '❌'
    });

    // Validate input
    if (!name || !email || !subject || !message) {
      console.log('❌ Missing required fields');
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Only verify CAPTCHA if it's configured and a token is provided
    if (process.env.HCAPTCHA_SECRET_KEY && captchaToken) {
      console.log('🔒 Verifying hCaptcha...');
      const isValidCaptcha = await verifyCaptcha(captchaToken);
      if (!isValidCaptcha) {
        console.log('❌ Invalid hCaptcha');
        return NextResponse.json(
          { success: false, message: 'Invalid CAPTCHA verification' },
          { status: 400 }
        );
      }
      console.log('✅ hCaptcha verified');
    } else {
      console.log('⚠️ hCaptcha verification skipped (not configured or no token)');
    }

    // Check if Resend is configured
    if (!resend) {
      console.log('⚠️ Resend not configured, simulating email send');
      console.log('📧 Would send confirmation email to:', email);
      console.log('📧 Would send notification email to:', ADMIN_EMAIL);
      console.log('📬 Email content:', { name, email, subject, message });
      
      return NextResponse.json(
        { success: true, message: 'Your message has been received (development mode)' },
        { status: 200 }
      );
    }

    console.log('📧 Sending emails via Resend...');

    // Send confirmation email to the user
    await resend.emails.send({
      from: 'Ethan SMADJA <contact@ethansmadja.com>', // Using your custom domain email
      to: email,
      subject: 'Thank you for contacting Ethan Smadja',
      react: ContactConfirmationEmail({ name }),
    });
    console.log('✅ Confirmation email sent to user');

    // Send notification email to the admin
    await resend.emails.send({
      from: 'Ethan SMADJA <contact@ethansmadja.com>', // Using your custom domain email
      to: ADMIN_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      react: ContactNotificationEmail({ name, email, subject, message }),
    });
    console.log('✅ Notification email sent to admin');

    return NextResponse.json(
      { success: true, message: 'Your message has been sent' },
      { status: 200 }
    );
  } catch (error) {
    console.error('💥 Error in contact API:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    );
  }
} 