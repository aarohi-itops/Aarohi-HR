import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { 
  generateJobApplicationNotificationHtml, 
  generateJobApplicationNotificationText, 
  generateJobApplicationConfirmationHtml, 
  generateJobApplicationConfirmationText 
} from '@/components/emails/JobApplicationTemplates';
import { 
  generateMessageId, 
  createEmailHeaders, 
  getLogoUrl 
} from '@/components/emails/EmailUtils';

// Initialize resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, subject, message, jobId, jobTitle, company } = body;

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format the message with job details for notification
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
    
    // Generate a formatted subject line with job title and company
    const formattedSubject = subject || `Job Application: ${jobTitle} at ${company}`;
    
    // Generate Message-ID for notification email
    const notificationMessageId = generateMessageId(domain);
    const notificationHeaders = createEmailHeaders(notificationMessageId, domain, 'notification');

    // Create a consistent email subject for admin notification
    const notificationSubject = `New Job Application: ${jobTitle} at ${company}`;

    // Send notification email using Resend with job-specific template
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: process.env.TO_EMAIL || 'sushant.ku.sh.70@gmail.com',
      subject: notificationSubject,
      replyTo: email,
      headers: notificationHeaders,
      text: generateJobApplicationNotificationText({
        fullName,
        email,
        phone,
        subject: formattedSubject,
        message,
        formattedMessage,
        currentDate,
        jobId,
        jobTitle,
        company
      }),
      html: generateJobApplicationNotificationHtml({
        fullName,
        email,
        phone,
        subject: formattedSubject,
        message,
        formattedMessage, 
        currentDate,
        jobId,
        jobTitle,
        company
      }),
    });

    // Generate Message-ID for confirmation email
    const confirmationMessageId = generateMessageId(domain);
    const confirmationHeaders = createEmailHeaders(confirmationMessageId, domain, 'confirmation');

    // Create a consistent confirmation email subject
    const confirmationSubject = `Thank you for applying to ${jobTitle} at ${company}`;

    // Send confirmation email to the user with job-specific template
    const { error: confirmationError } = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: confirmationSubject,
      headers: confirmationHeaders,
      text: generateJobApplicationConfirmationText({
        fullName,
        subject: formattedSubject,
        message,
        logoUrl,
        jobTitle,
        company
      }),
      html: generateJobApplicationConfirmationHtml({
        fullName,
        subject: formattedSubject,
        message,
        logoUrl,
        jobTitle, 
        company
      }),
    });

    if (error || confirmationError) {
      console.error('Error sending email:', error || confirmationError);
      return NextResponse.json({ error: (error || confirmationError)?.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error processing job application:', error);
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 }
    );
  }
} 