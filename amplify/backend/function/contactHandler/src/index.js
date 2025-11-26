const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

const ses = new SESClient({ region: process.env.SES_REGION || "us-east-1" });

exports.handler = async (event) => {
  try {
    const body = event.body ? JSON.parse(event.body) : {};
    const name = body.name || "Website visitor";
    const fromEmail = body.email || "no-reply@example.com";
    const message = body.message || "";

    if (!process.env.SES_SENDER || !process.env.CONTACT_RECIPIENT) {
      console.error("Missing SES_SENDER or CONTACT_RECIPIENT env vars");
      return {
        statusCode: 500,
        body: JSON.stringify({ ok: false, error: "Server not configured" }),
      };
    }

    const params = {
      Destination: { ToAddresses: [process.env.CONTACT_RECIPIENT] },
      Message: {
        Body: { Text: { Data: `From: ${name} <${fromEmail}>\n\n${message}` } },
        Subject: { Data: `Website contact from ${name}` },
      },
      Source: process.env.SES_SENDER,
      ReplyToAddresses: [fromEmail],
    };

    await ses.send(new SendEmailCommand(params));

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.error("Contact handler error:", err);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ok: false, error: err.message }),
    };
  }
};
