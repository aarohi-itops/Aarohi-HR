import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { 
  generateNotificationEmailHtml, 
  generateNotificationEmailText, 
  generateConfirmationEmailHtml, 
  generateConfirmationEmailText 
} from '@/components/emails/EmailTemplates';
import { 
  generateMessageId, 
  createEmailHeaders, 
  getLogoUrl 
} from '@/components/emails/EmailUtils';

// Initialize resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { fullName, email, phone, subject, message } = await request.json();

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const formattedMessage = message.replace(/\n/g, '<br />');
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    // Extract domain for Message-ID
    const fromEmail = process.env.FROM_EMAIL || 'aarohicontact@aarohihr.dobaato.com';
    const domain = fromEmail.split('@')[1];
    
    // Get logo URL for confirmation email
    const logoUrl = getLogoUrl();
    
    // Generate Message-ID for notification email
    const notificationMessageId = generateMessageId(domain);
    const notificationHeaders = createEmailHeaders(notificationMessageId, domain, 'notification');

    // Create a consistent email subject
    const notificationSubject = subject ? `New Website Inquiry: ${subject}` : `New Website Inquiry from ${fullName}`;

    // Send notification email using Resend with improved HTML template
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: process.env.TO_EMAIL || 'sushant.ku.sh.70@gmail.com',
      subject: notificationSubject,
      replyTo: email,
      headers: notificationHeaders,
      text: generateNotificationEmailText({
        fullName,
        email,
        phone,
        subject,
        message,
        formattedMessage,
        currentDate
      }),
      html: generateNotificationEmailHtml({
        fullName,
        email,
        phone,
        subject,
        message,
        formattedMessage,
        currentDate
      }),
    });

    // Generate Message-ID for confirmation email
    const confirmationMessageId = generateMessageId(domain);
    const confirmationHeaders = createEmailHeaders(confirmationMessageId, domain, 'confirmation');

    // Create a consistent confirmation email subject
    const confirmationSubject = 'Thank you for contacting Aarohi HR Solutions';

    // Send confirmation email to the user
    const { error: confirmationError } = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: confirmationSubject,
      headers: confirmationHeaders,
      text: generateConfirmationEmailText({
        fullName,
        subject,
        message,
        logoUrl
      }),
      html: generateConfirmationEmailHtml({
        fullName,
        subject,
        message,
        logoUrl
      }),
    });

    if (error || confirmationError) {
      console.error('Error sending email:', error || confirmationError);
      return NextResponse.json({ error: (error || confirmationError)?.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error in contact form submission:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
} 