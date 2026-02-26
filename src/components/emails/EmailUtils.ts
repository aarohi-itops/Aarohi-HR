/**
 * Generates a unique Message-ID for use in email headers
 * Important for spam prevention and email threading
 */
export const generateMessageId = (domain: string): string => {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 100000);
  return `<${timestamp}.${random}@${domain}>`;
};

/**
 * Creates email headers to improve deliverability and prevent spam classification
 */
export const createEmailHeaders = (messageId: string, domain: string, type: 'notification' | 'confirmation'): Record<string, string> => {
  const baseHeaders = {
    'X-Entity-Ref-ID': messageId.replace(/[<>]/g, ''),
    'Message-ID': messageId,
    'List-Unsubscribe': `<mailto:unsubscribe@${domain}?subject=unsubscribe>`,
  };

  if (type === 'notification') {
    return {
      ...baseHeaders,
      'X-Mailgun-Variables': JSON.stringify({
        email_type: 'contact_form',
      }),
      'Feedback-ID': 'contact-form:aarohihr',
    };
  } else {
    return {
      ...baseHeaders,
      'X-Mailgun-Variables': JSON.stringify({
        email_type: 'contact_auto_reply',
      }),
      'Feedback-ID': 'auto-reply:aarohihr',
      'Precedence': 'bulk',
      'Auto-Submitted': 'auto-replied',
    };
  }
};

/**
 * Returns the logo URL for emails
 * In production, this should be replaced with a CDN-hosted logo
 */
export const getLogoUrl = (): string => {
  // For best email practices, you should host this logo on a CDN or public server
  return 'https://aarohihrsolutions.com/storage/images/setting/66d5db008bd7c664885099cafbcropped-Aarohi-logo123.png';
}; 