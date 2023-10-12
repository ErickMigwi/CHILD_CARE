const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

sgMail.setApiKey('YOUR_SENDGRID_API_KEY');

app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;

  const msg = {
    to,
    from: 'your-email@example.com',
    subject,
    text,
  };

  sgMail.send(msg)
    .then(() => res.status(200).send('Email sent successfully'))
    .catch((error) => {
      console.error('Error sending email:', error);
      res.status(500).send('Internal Server Error');
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});