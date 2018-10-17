const fs = require('fs');
const sgMail = require('@sendgrid/mail');
const template = require('es6-template-strings');

// constants
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const email = fs.readFileSync('email-template/dist/achievement.html', 'utf8');

// lambda function call
exports.handler = async function(event) {
    const webhookData = JSON.parse(event.body);

    /**
     * here you would lookup the subject's full name and
     * email address in your user/auth provider database
     * to personalize the email
     */
    // const { subject } = webhookData.earnedAchievement;
    // const userInfo = await getUserInfo(subject);

    const msg = {
        to: 'test@example.com', // user's email here
        from: 'test@example.com', // your company's email here
        subject: 'Achievement Earned!',
        html: template(email, webhookData.achievement)
    };
    await sgMail.send(msg);

    return {
        statusCode: 200,
        body: 'OK'
    };
};
