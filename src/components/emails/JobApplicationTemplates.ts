// Types for job application email templates
type JobApplicationNotificationProps = {
  fullName: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  formattedMessage: string;
  currentDate: string;
  logoUrl?: string;
  jobId: number;
  jobTitle: string;
  company: string;
};

type JobApplicationConfirmationProps = {
  fullName: string;
  subject?: string;
  message: string;
  logoUrl: string;
  jobTitle: string;
  company: string;
};

/**
 * Generates HTML email template for admin notifications of job applications
 */
export const generateJobApplicationNotificationHtml = ({
  fullName,
  email,
  phone,
  subject,
  formattedMessage,
  currentDate,
  jobId,
  jobTitle,
  company,
}: JobApplicationNotificationProps): string => {
  const emailSubject = subject || `Job Application for ${jobTitle} at ${company}`;
  
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
          <h1>New Job Application</h1>
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
            <div class="field-value">${subject || 'Job Application'}</div>
          </div>
          
          <div class="field">
            <span class="field-label">Message:</span>
            <div class="message-box">${formattedMessage}</div>
          </div>
          
          <div class="job-details">
            <h2 class="job-details-title">Job Details</h2>
            <div class="field">
              <span class="field-label">Job ID:</span>
              <div class="field-value">${jobId}</div>
            </div>
            <div class="field">
              <span class="field-label">Position:</span>
              <div class="field-value">${jobTitle}</div>
            </div>
            <div class="field">
              <span class="field-label">Company:</span>
              <div class="field-value">${company}</div>
            </div>
          </div>
        </div>
        
        <div class="footer">
          <p>This application was submitted through the website's job application form. You can reply directly to this email to contact the applicant.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

/**
 * Generates plain text version of job application notification email
 */
export const generateJobApplicationNotificationText = ({
  fullName,
  email,
  phone,
  subject,
  message,
  currentDate,
  jobId,
  jobTitle,
  company,
}: JobApplicationNotificationProps): string => {
  const emailSubject = subject || `Job Application for ${jobTitle} at ${company}`;
  
  return `
New Job Application - ${currentDate}
Subject: ${emailSubject}

Name: ${fullName}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}

JOB DETAILS:
Job ID: ${jobId}
Position: ${jobTitle}
Company: ${company}

This application was submitted through the website's job application form. You can reply directly to this email to contact the applicant.
  `;
};

/**
 * Generates HTML email template for job applicant confirmation
 */
export const generateJobApplicationConfirmationHtml = ({
  fullName,
  subject,
  message,
  logoUrl,
  jobTitle,
  company,
}: JobApplicationConfirmationProps): string => {
  const emailSubject = subject || `Your Application for ${jobTitle} at ${company}`;
  
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
        .job-info {
          background-color: #F1F9F5;
          border: 1px solid #E2F3E9;
          border-radius: 8px;
          padding: 15px;
          margin: 20px 0;
        }
        .job-title {
          font-size: 18px;
          font-weight: 600;
          color: #0F172A;
          margin-top: 0;
        }
        .job-company {
          font-size: 16px;
          color: #334155;
          margin-bottom: 15px;
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
          <img src="${logoUrl}" alt="FindStaff HR Logo" class="logo">
          <h1>Thank You for Your Application!</h1>
        </div>
        
        <div class="content">
          <p>Dear ${fullName},</p>
          
          <p>Thank you for applying for a position with us. We have received your application and our team will review it promptly.</p>
          
          <div class="job-info">
            <h3 class="job-title">${jobTitle}</h3>
            <p class="job-company">${company}</p>
          </div>
          
          <p>Here's a summary of the information you provided:</p>
          
          <div class="message-summary">
            ${message.substring(0, 200)}${message.length > 200 ? '...' : ''}
          </div>
          
          <p>If your qualifications match our requirements, we will contact you to discuss the next steps in the hiring process. Please note that due to the high volume of applications we receive, we may not be able to respond to all applicants individually.</p>
          
          <p>If you have any questions regarding your application, please don't hesitate to reach out to our recruitment team.</p>
          
          <div class="contact-info">
            <div class="contact-item">Email: info@aarohihrsolutions.com</div>
            <div class="contact-item">Phone: +977 1 4961807</div>
          </div>
          
          <p>Best regards,<br>The Recruitment Team<br>Aarohi HR Solutions</p>
        </div>
        
        <div class="footer">
          <p>&copy; ${new Date().getFullYear()} Aarohi HR Solutions. All rights reserved.</p>
          <p>This is an automated message. Please do not reply to this email.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

/**
 * Generates plain text version of job application confirmation email
 */
export const generateJobApplicationConfirmationText = ({
  fullName,
  subject,
  message,
  jobTitle,
  company,
}: JobApplicationConfirmationProps): string => {
  const emailSubject = subject || `Your Application for ${jobTitle} at ${company}`;
  
  return `
Thank You for Your Application!
Re: ${emailSubject}

Dear ${fullName},

Thank you for applying for a position with us. We have received your application and our team will review it promptly.

JOB DETAILS:
Position: ${jobTitle}
Company: ${company}

Here's a summary of the information you provided:
${message.substring(0, 200)}${message.length > 200 ? '...' : ''}

If your qualifications match our requirements, we will contact you to discuss the next steps in the hiring process. Please note that due to the high volume of applications we receive, we may not be able to respond to all applicants individually.

If you have any questions regarding your application, please don't hesitate to reach out to our recruitment team:

Email: info@aarohihrsolutions.com
Phone: +977 1 4961807

Best regards,
The Recruitment Team
Aarohi HR Solutions

© ${new Date().getFullYear()} Aarohi HR Solutions. All rights reserved.
This is an automated message. Please do not reply to this email.
  `;
}; 