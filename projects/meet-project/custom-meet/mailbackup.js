const nodemailer = require('nodemailer');

// create a nodemailer transporter object
const transporter = nodemailer.createTransport({
    host: 'your.smtp.server',
    port: 587, // replace with your SMTP server's port number
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'your_username',
        pass: 'your_password',
    },
});

// create an email message object
const message = {
    from: 'sender@example.com', // sender address
    to: 'recipient@example.com', // list of receivers
    subject: 'Subject of your email', // Subject line
    text: 'Text body of your email', // plain text body
    html: '<p>HTML body of your email</p>', // HTML body
};

// send the email
transporter.sendMail(message, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Email sent: ${info.response}`);
    }
});
