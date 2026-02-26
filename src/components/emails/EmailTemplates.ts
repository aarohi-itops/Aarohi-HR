// Types for email templates
type NotificationEmailProps = {
  fullName: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  formattedMessage: string;
  currentDate: string;
  logoUrl?: string;
};

type ConfirmationEmailProps = {
  fullName: string;
  subject?: string;
  message: string;
  logoUrl: string;
};

/**
 * Generates HTML email template for admin notifications
 */
export const generateNotificationEmailHtml = ({
  fullName,
  email,
  phone,
  subject,
  formattedMessage,
  currentDate,
}: NotificationEmailProps): string => {
  const emailSubject = subject || `New Inquiry from ${fullName}`;
  
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${emailSubject}</title>
      <style>
        body {
          font-family: 'DM Sans', Arial, sans-serif;
          line-height: 1.6;
          color: #334155;
          margin: 0;
          padding: 0;
          background-color: #f8fafc;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 8px;
          border-top: 4px solid #0091e6;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        .header {
          padding-bottom: 15px;
          border-bottom: 1px solid #E2E8F0;
          margin-bottom: 20px;
        }
        .logo {
          max-width: 160px;
          margin-bottom: 10px;
        }
        h1 {
          color: #0F172A;
          font-size: 20px;
          font-weight: 600;
          margin: 0;
        }
        .date {
          color: #64748B;
          font-size: 14px;
          margin-top: 5px;
        }
        .content {
          padding: 0;
        }
        .field {
          margin-bottom: 15px;
        }
        .field-label {
          font-weight: 500;
          color: #0F172A;
          display: block;
          margin-bottom: 5px;
        }
        .field-value {
          color: #334155;
          background-color: #F8FAFC;
          padding: 8px 12px;
          border-radius: 4px;
          border-left: 2px solid #0091e6;
        }
        .message-box {
          background-color: #F8FAFC;
          padding: 12px;
          border-radius: 4px;
          margin-top: 5px;
          border-left: 2px solid #0091e6;
        }
        .footer {
          margin-top: 20px;
          padding-top: 15px;
          border-top: 1px solid #E2E8F0;
          color: #64748B;
          font-size: 12px;
        }
        @media only screen and (max-width: 600px) {
          .container {
            width: 100%;
            border-radius: 0;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Website Inquiry</h1>
          <div class="date">${currentDate}</div>
        </div>
        
        <div class="content">
          <div class="field">
            <span class="field-label">Name:</span>
            <div class="field-value">${fullName}</div>
          </div>
          
          <div class="field">
            <span class="field-label">Email:</span>
            <div class="field-value">${email}</div>
          </div>
          
          <div class="field">
            <span class="field-label">Phone:</span>
            <div class="field-value">${phone || 'Not provided'}</div>
          </div>
          
          <div class="field">
            <span class="field-label">Subject:</span>
            <div class="field-value">${subject || 'General Inquiry'}</div>
          </div>
          
          <div class="field">
            <span class="field-label">Message:</span>
            <div class="message-box">${formattedMessage}</div>
          </div>
        </div>
        
        <div class="footer">
          <p>This message was sent from the contact form on your website. You can reply directly to this email to respond to the sender.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

/**
 * Generates plain text version of notification email
 */
export const generateNotificationEmailText = ({
  fullName,
  email,
  phone,
  subject,
  message,
  currentDate,
}: NotificationEmailProps): string => {
  return `
New Website Inquiry - ${currentDate}

Name: ${fullName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Subject: ${subject || 'General Inquiry'}

Message:
${message}

This message was sent from the contact form on your website. You can reply directly to this email to respond to the sender.
  `;
};

/**
 * Generates HTML email template for user confirmation
 */
export const generateConfirmationEmailHtml = ({
  fullName,
  subject,
  message,
  logoUrl,
}: ConfirmationEmailProps): string => {
  const emailSubject = 'Thank you for contacting Aarohi HR Solutions';
  
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${emailSubject}</title>
      <style>
        body {
          font-family: 'DM Sans', Arial, sans-serif;
          line-height: 1.6;
          color: #334155;
          margin: 0;
          padding: 0;
          background-color: #f8fafc;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 8px;
          border-top: 5px solid #0091e6;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }
        .header {
          text-align: center;
          padding-bottom: 20px;
          border-bottom: 1px solid #E2E8F0;
          margin-bottom: 30px;
        }
        .logo {
          max-width: 180px;
          margin-bottom: 15px;
        }
        h1 {
          color: #0F172A;
          font-size: 24px;
          font-weight: 600;
          margin: 0;
        }
        h2 {
          color: #0F172A;
          font-size: 20px;
          font-weight: 500;
          margin-top: 0;
        }
        .content {
          padding: 0 15px;
        }
        p {
          color: #334155;
          font-size: 16px;
          margin-bottom: 20px;
        }
        .message-summary {
          background-color: #F8FAFC;
          padding: 15px;
          border-radius: 6px;
          margin: 20px 0;
          border-left: 3px solid #0091e6;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #E2E8F0;
          color: #64748B;
          font-size: 14px;
        }
        .contact-info {
          margin: 25px 0;
          text-align: center;
        }
        .contact-item {
          margin-bottom: 10px;
        }
        .button {
          display: inline-block;
          background-color: #0091e6;
          color: white;
          text-decoration: none;
          padding: 10px 25px;
          border-radius: 50px;
          margin-top: 10px;
          font-weight: 500;
        }
        @media only screen and (max-width: 600px) {
          .container {
            width: 100%;
            border-radius: 0;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="${logoUrl}" alt="Aarohi HR Solutions Logo" class="logo" />
          <h1>Thank You for Contacting Us!</h1>
        </div>
        
        <div class="content">
          <p>Dear ${fullName},</p>
          
          <p>Thank you for reaching out to Aarohi HR Solutions. We have received your message and our team will review it promptly.</p>
          
          <p>Here's a summary of the information you provided:</p>
          
          <div class="message-summary">
            <p><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
            <p><strong>Message:</strong> ${message.length > 100 ? message.substring(0, 100) + '...' : message}</p>
          </div>
          
          <p>Our team is committed to responding to all inquiries within 24-48 business hours. If your matter requires immediate attention, please don't hesitate to call us directly.</p>
          
          <div class="contact-info">
            <div class="contact-item">
              <strong>Phone:</strong> +977 1 4961807
            </div>
            <div class="contact-item">
              <strong>Email:</strong> info@aarohihrsolutions.com
            </div>
            <div class="contact-item">
              <strong>Business Hours:</strong> Sunday – Friday, 9 AM to 6 PM (Nepal Standard Time)
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px;">
            <a href="https://aarohihrsolutions.com" class="button">Visit Our Website</a>
          </div>
        </div>
        
        <div class="footer">
          <p>© ${new Date().getFullYear()} Aarohi HR Solutions. All rights reserved.</p>
          <p>Basundhara-3, Kathmandu, Nepal</p>
          <p>This is an automated message. Please do not reply to this email.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

/**
 * Generates plain text version of confirmation email
 */
export const generateConfirmationEmailText = ({
  fullName,
  subject,
  message,
}: ConfirmationEmailProps): string => {
  return `
Thank You for Contacting Us!

Dear ${fullName},

Thank you for reaching out to Aarohi HR Solutions. We have received your message and our team will review it promptly.

Here's a summary of the information you provided:
Subject: ${subject || 'General Inquiry'}
Message: ${message.length > 100 ? message.substring(0, 100) + '...' : message}

Our team is committed to responding to all inquiries within 24-48 business hours. If your matter requires immediate attention, please don't hesitate to call us directly.

Contact Information:
Phone: +977 1 4961807
Email: info@aarohihrsolutions.com
Business Hours: Sunday – Friday, 9 AM to 6 PM (Nepal Standard Time)

Visit Our Website: https://aarohihrsolutions.com

© ${new Date().getFullYear()} Aarohi HR Solutions. All rights reserved.
Basundhara-3, Kathmandu, Nepal

This is an automated message. Please do not reply to this email.
  `;
}; 