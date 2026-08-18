const sendEmail = async ({
    to,
    subject,
    html,
    replyTo,
    text
}) => {
    const webhookUrl = process.env.GOOGLE_EMAIL_WEBHOOK_URL;
    const secret = process.env.GOOGLE_EMAIL_SECRET;

    if (!webhookUrl) {
        throw new Error('GOOGLE_EMAIL_WEBHOOK_URL is not configured.');
    }

    if (!secret) {
        throw new Error('GOOGLE_EMAIL_SECRET is not configured.');
    }

    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            secret,
            to,
            subject,
            html,
            text: text || 'New message from AASHIANA website.',
            replyTo: replyTo || ''
        })
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
        console.error('❌ Google Email Service Error:', result);

        throw new Error(
            result.message || 'Failed to send email.'
        );
    }

    console.log('📧 Email sent successfully through Google.');

    return result;
};

module.exports = {
    sendEmail
};