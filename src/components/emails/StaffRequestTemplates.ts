// Types for staff request email templates
type StaffRequestNotificationProps = {
  fullName: string;
  email: string;
  phone?: string;
  company: string;
  subject?: string;
  message: string;
  formattedMessage: string;
  currentDate: string;
  logoUrl?: string;
  category: string;
};

type StaffRequestConfirmationProps = {
  fullName: string;
  subject?: string;
  message: string;
  logoUrl: string;
  company: string;
  category: string;
};

/**
 * Generates HTML email template for admin notifications of staff requests
 */
export const generateStaffRequestNotificationHtml = ({
  fullName,
  email,
  phone,
  company,
  subject,
  formattedMessage,
  currentDate,
  category,
}: StaffRequestNotificationProps): string => {
  const emailSubject = subject || `Staff Request for ${category} from ${company}`;
  
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
        .request-details {
          background-color: #F1F9F5;
          border: 1px solid #E2F3E9;
          border-radius: 8px;
          padding: 15px;
          margin-top: 20px;
        }
        .request-details-title {
          color: #0F172A;
          font-size: 16px;
          font-weight: 600;
          margin-top: 0;
          margin-bottom: 10px;
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
          <h1>New Staff Request</h1>
          <div class="date">${currentDate}</div>
        </div>
        
        <div class="content">
          <div class="field">
            <span class="field-label">Requester Name:</span>
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
            <span class="field-label">Company:</span>
            <div class="field-value">${company}</div>
          </div>
          
          <div class="field">
            <span class="field-label">Subject:</span>
            <div class="field-value">${subject || 'Staff Request'}</div>
          </div>
          
          <div class="field">
            <span class="field-label">Message:</span>
            <div class="message-box">${formattedMessage}</div>
          </div>
          
          <div class="request-details">
            <h2 class="request-details-title">Request Details</h2>
            <div class="field">
              <span class="field-label">Industry Category:</span>
              <div class="field-value">${category}</div>
            </div>
          </div>
        </div>
        
        <div class="footer">
          <p>This request was submitted through the website's staff request form. You can reply directly to this email to contact the requester.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

/**
 * Generates plain text version of staff request notification email
 */
export const generateStaffRequestNotificationText = ({
  fullName,
  email,
  phone,
  company,
  subject,
  message,
  currentDate,
  category,
}: StaffRequestNotificationProps): string => {
  const emailSubject = subject || `Staff Request for ${category} from ${company}`;
  
  return `
New Staff Request - ${currentDate}
Subject: ${emailSubject}

Requester Name: ${fullName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company}

Message:
${message}

REQUEST DETAILS:
Industry Category: ${category}

This request was submitted through the website's staff request form. You can reply directly to this email to contact the requester.
  `;
};

/**
 * Generates HTML email template for staff request confirmation
 */
export const generateStaffRequestConfirmationHtml = ({
  fullName,
  subject,
  logoUrl,
  company,
  category,
}: StaffRequestConfirmationProps): string => {
  const emailSubject = subject || `Your Staff Request for ${category}`;
  
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
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        .header {
          text-align: center;
          padding-bottom: 20px;
          border-bottom: 1px solid #E2E8F0;
        }
        .logo {
          max-width: 180px;
          margin: 0 auto 15px;
          display: block;
        }
        h1 {
          color: #0F172A;
          font-size: 24px;
          font-weight: 600;
          margin-top: 0;
          margin-bottom: 10px;
        }
        .subheading {
          color: #64748B;
          font-size: 16px;
          font-weight: normal;
          margin-top: 0;
        }
        .content {
          padding: 20px 0;
        }
        .message {
          background-color: #F1F9F5;
          border: 1px solid #E2F3E9;
          border-radius: 8px;
          padding: 20px;
          margin: 20px 0;
        }
        .button {
          display: inline-block;
          background-color: #0091e6;
          color: white;
          text-decoration: none;
          padding: 12px 24px;
          border-radius: 30px;
          margin-top: 15px;
          font-weight: 500;
        }
        .contact-info {
          margin-top: 30px;
          background-color: #F8FAFC;
          padding: 15px;
          border-radius: 8px;
        }
        .footer {
          text-align: center;
          padding-top: 20px;
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
          <img src="${logoUrl}" alt="FindStaffHR Logo" class="logo" />
          <h1>Thank You for Your Request</h1>
          <p class="subheading">We've received your staff request for ${category}</p>
        </div>
        
        <div class="content">
          <p>Dear ${fullName},</p>
          
          <p>Thank you for submitting your staff request for <strong>${category}</strong>. We've received your request and our team will review it promptly.</p>
          
          <div class="message">
            <p><strong>Your request details:</strong></p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Industry Category:</strong> ${category}</p>
          </div>
          
          <p>Our specialized recruitment team will reach out to you within 1-2 business days to discuss your staffing needs in more detail and present you with suitable candidates.</p>
          
          <p>In the meantime, feel free to browse our website for more information about our services and expertise in ${category}.</p>
          
          <div class="contact-info">
            <p><strong>Need immediate assistance?</strong></p>
            <p>Call us at: <strong>(123) 456-7890</strong></p>
            <p>Email: <strong>support@findstaffhr.com</strong></p>
          </div>
        </div>
        
        <div class="footer">
          <p>This is an automated message, please do not reply directly to this email.</p>
          <p>&copy; 2023 FindStaffHR. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

/**
 * Generates plain text version of staff request confirmation email
 */
export const generateStaffRequestConfirmationText = ({
  fullName,
  subject,
  company,
  category,
}: StaffRequestConfirmationProps): string => {
  const emailSubject = subject || `Your Staff Request for ${category}`;
  
  return `
${emailSubject}

Dear ${fullName},

Thank you for submitting your staff request for ${category}. We've received your request and our team will review it promptly.

YOUR REQUEST DETAILS:
Company: ${company}
Industry Category: ${category}

Our specialized recruitment team will reach out to you within 1-2 business days to discuss your staffing needs in more detail and present you with suitable candidates.

In the meantime, feel free to browse our website for more information about our services and expertise in ${category}.

NEED IMMEDIATE ASSISTANCE?
Call us at: (123) 456-7890
Email: support@findstaffhr.com

This is an automated message, please do not reply directly to this email.

© 2023 FindStaffHR. All rights reserved.
  `;
}; 