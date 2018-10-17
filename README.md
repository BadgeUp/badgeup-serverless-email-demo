# BadgeUp Achievement Emails Demo
> Use [AWS Lambda](https://aws.amazon.com/lambda/), [SendGrid](https://sendgrid.com/) and [BageUp](https://www.badgeup.io/) Webhooks to send earned achievement emails.

Please read our [article on Medium](https://blog.badgeup.io/serverless-user-engagement-with-aws-lambda-sendgrid-badgeup-and-node-js-53cdc4fa1ddd) and see the BadgeUp [Webhook documentation](https://docs.badgeup.io/platform/advanced/webhooks/) for more information on setting up webhooks and the JSON payload.

## Email Template
The email template in the `email-template` sub-directory was built with [Foundation for Emails](https://foundation.zurb.com/emails.html).

## Development
To get started, ensure you are running Node.js 8+. Install dependencies with:

```bash
npm install
```

The `email-template` sub-directory has its own README instructions to modify/build the email template.

## Deployment
You may need to add `--profile` and `--region` to the `aws lambda` command depending on your local setup.

```bash
npm ci && \
zip -rq lambda.zip * -x '.git' && \
aws lambda update-function-code \
  --function-name 'achievement-email-script' \
  --zip-file 'fileb://lambda.zip'
```
