
/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


/**********************
 * Example get method *
 **********************/

app.get('/contact', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

app.get('/contact/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/

app.post('/contact', async function(req, res) {
  try {
    const body = req.body || {};
    const name = body.name || 'Website visitor';
    const fromEmail = body.email || 'no-reply@example.com';
    const message = body.message || '';

    const { SES_REGION, SES_SENDER, CONTACT_RECIPIENT } = process.env;
    if (!SES_SENDER || !CONTACT_RECIPIENT) {
      console.error('Missing SES_SENDER or CONTACT_RECIPIENT env vars');
      return res.status(500).json({ ok: false, error: 'Server not configured' });
    }

    // Lazy-load AWS SDK to keep cold start small when not used in other routes
    const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');
    const ses = new SESClient({ region: SES_REGION || 'us-east-1' });

    const params = {
      Destination: { ToAddresses: [CONTACT_RECIPIENT] },
      Message: {
        Body: { Text: { Data: `From: ${name} <${fromEmail}>\n\n${message}` } },
        Subject: { Data: `Website contact from ${name}` },
      },
      Source: SES_SENDER,
      ReplyToAddresses: [fromEmail],
    };

    await ses.send(new SendEmailCommand(params));

    return res.json({ ok: true });
  } catch (err) {
    console.error('contact handler error', err);
    return res.status(500).json({ ok: false, error: err.message });
  }
});

app.post('/contact/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/contact', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/contact/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/contact', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/contact/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
