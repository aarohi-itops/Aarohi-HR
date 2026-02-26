import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { 
  generateStaffRequestNotificationHtml, 
  generateStaffRequestNotificationText, 
  generateStaffRequestConfirmationHtml, 
  generateStaffRequestConfirmationText 
} from '../../../components/emails/StaffRequestTemplates';
import { 
  generateMessageId, 
  createEmailHeaders, 
  getLogoUrl 
} from '../../../components/emails/EmailUtils';

// Initialize resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, company, subject, message, category } = body;

    // Validate required fields
    if (!fullName || !email || !message || !company) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format the message with staff request details for notification
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
    
    // Generate a formatted subject line
    const formattedSubject = subject || `Staff Request for ${category} from ${company}`;
    
    // Generate Message-ID for notification email
    const notificationMessageId = generateMessageId(domain);
    const notificationHeaders = createEmailHeaders(notificationMessageId, domain, 'notification');

    // Create a consistent email subject for admin notification
    const notificationSubject = `New Staff Request: ${category} from ${company}`;

    // Send notification email using Resend with staff request template
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: process.env.TO_EMAIL || 'sushant.ku.sh.70@gmail.com',
      subject: notificationSubject,
      replyTo: email,
      headers: notificationHeaders,
      text: generateStaffRequestNotificationText({
        fullName,
        email,
        phone,
        company,
        subject: formattedSubject,
        message,
        formattedMessage,
        currentDate,
        category
      }),
      html: generateStaffRequestNotificationHtml({
        fullName,
        email,
        phone,
        company,
        subject: formattedSubject,
        message,
        formattedMessage, 
        currentDate,
        category
      }),
    });

    // Generate Message-ID for confirmation email
    const confirmationMessageId = generateMessageId(domain);
    const confirmationHeaders = createEmailHeaders(confirmationMessageId, domain, 'confirmation');

    // Create a consistent confirmation email subject
    const confirmationSubject = `Thank you for your ${category} staff request - FindStaffHR`;

    // Send confirmation email to the user with staff request template
    const { error: confirmationError } = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: confirmationSubject,
      headers: confirmationHeaders,
      text: generateStaffRequestConfirmationText({
        fullName,
        subject: formattedSubject,
        message,
        logoUrl,
        company,
        category
      }),
      html: generateStaffRequestConfirmationHtml({
        fullName,
        subject: formattedSubject,
        message,
        logoUrl,
        company, 
        category
      }),
    });

    if (error || confirmationError) {
      console.error('Error sending email:', error || confirmationError);
      return NextResponse.json({ error: (error || confirmationError)?.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error processing staff request:', error);
    return NextResponse.json(
      { error: 'Failed to process staff request' },
      { status: 500 }
    );
  }
} 