// Types for industry job application email templates
type IndustryJobApplicationNotificationProps = {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
  formattedMessage: string;
  currentDate: string;
  logoUrl?: string;
  category: string;
};

type IndustryJobApplicationConfirmationProps = {
  fullName: string;
  subject?: string;
  message: string;
  logoUrl: string;
  company?: string;
  category: string;
};

/**
 * Generates HTML email template for admin notifications of industry-specific job applications
 */
export const generateIndustryJobApplicationNotificationHtml = ({
  fullName,
  email,
  phone,
  company,
  subject,
  formattedMessage,
  currentDate,
  category,
}: IndustryJobApplicationNotificationProps): string => {
  const emailSubject = subject || `Job Application for ${category}`;
  
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
        .job-details {
          background-color: #F1F9F5;
          border: 1px solid #E2F3E9;
          border-radius: 8px;
          padding: 15px;
          margin-top: 20px;
        }
        .job-details-title {
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
          <h1>New Industry Job Application</h1>
          <div class="date">${currentDate}</div>
        </div>
        
        <div class="content">
          <div class="field">
            <span class="field-label">Applicant Name:</span>
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
            <span class="field-label">Current Company:</span>
            <div class="field-value">${company || 'Not provided'}</div>
          </div>
          
          <div class="field">
            <span class="field-label">Subject:</span>
            <div class="field-value">${subject || 'Job Application'}</div>
          </div>
          
          <div class="field">
            <span class="field-label">Message:</span>
            <div class="message-box">${formattedMessage}</div>
          </div>
          
          <div class="job-details">
            <h2 class="job-details-title">Industry Details</h2>
            <div class="field">
              <span class="field-label">Industry Category:</span>
              <div class="field-value">${category}</div>
            </div>
          </div>
        </div>
        
        <div class="footer">
          <p>This application was submitted through the website's industry job application form. You can reply directly to this email to contact the applicant.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

/**
 * Generates plain text version of industry job application notification email
 */
export const generateIndustryJobApplicationNotificationText = ({
  fullName,
  email,
  phone,
  company,
  subject,
  message,
  currentDate,
  category,
}: IndustryJobApplicationNotificationProps): string => {
  const emailSubject = subject || `Job Application for ${category}`;
  
  return `
New Industry Job Application - ${currentDate}
Subject: ${emailSubject}

Applicant Name: ${fullName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Current Company: ${company || 'Not provided'}

Message:
${message}

INDUSTRY DETAILS:
Industry Category: ${category}

This application was submitted through the website's industry job application form. You can reply directly to this email to contact the applicant.
  `;
};

/**
 * Generates HTML email template for industry job applicant confirmation
 */
export const generateIndustryJobApplicationConfirmationHtml = ({
  fullName,
  subject,
  logoUrl,
  company,
  category,
}: IndustryJobApplicationConfirmationProps): string => {
  const emailSubject = subject || `Your Application for ${category} Jobs`;
  
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
        .next-steps {
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
          <h1>Application Received</h1>
          <p class="subheading">Thank you for your interest in ${category} jobs</p>
        </div>
        
        <div class="content">
          <p>Dear ${fullName},</p>
          
          <p>Thank you for applying for a position in the <strong>${category}</strong> industry. We've received your application and our recruitment team will review it promptly.</p>
          
          <div class="message">
            <p><strong>Your application details:</strong></p>
            <p><strong>Industry Applied For:</strong> ${category}</p>
            ${company ? `<p><strong>Current Company:</strong> ${company}</p>` : ''}
          </div>
          
          <p>Our specialized recruitment team for the ${category} industry will review your application and reach out to you if your qualifications match any of our current or upcoming openings.</p>
          
          <div class="next-steps">
            <p><strong>What happens next?</strong></p>
            <ol>
              <li>Our team will review your application within 1-3 business days.</li>
              <li>If your skills and experience match our requirements, we'll contact you for an initial phone screen.</li>
              <li>You might be invited for further interviews with our recruitment specialists.</li>
            </ol>
          </div>
          
          <p>In the meantime, feel free to browse our website for more job opportunities in the ${category} sector and other industries.</p>
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
 * Generates plain text version of industry job application confirmation email
 */
export const generateIndustryJobApplicationConfirmationText = ({
  fullName,
  subject,
  company,
  category,
}: IndustryJobApplicationConfirmationProps): string => {
  const emailSubject = subject || `Your Application for ${category} Jobs`;
  
  return `
${emailSubject}

Dear ${fullName},

Thank you for applying for a position in the ${category} industry. We've received your application and our recruitment team will review it promptly.

YOUR APPLICATION DETAILS:
Industry Applied For: ${category}
${company ? `Current Company: ${company}` : ''}

Our specialized recruitment team for the ${category} industry will review your application and reach out to you if your qualifications match any of our current or upcoming openings.

WHAT HAPPENS NEXT?
1. Our team will review your application within 1-3 business days.
2. If your skills and experience match our requirements, we'll contact you for an initial phone screen.
3. You might be invited for further interviews with our recruitment specialists.

In the meantime, feel free to browse our website for more job opportunities in the ${category} sector and other industries.

This is an automated message, please do not reply directly to this email.

© 2023 FindStaffHR. All rights reserved.
  `;
}; 