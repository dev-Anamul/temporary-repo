/* eslint-disable class-methods-use-this */
const nodemailer = require('nodemailer');
const htmlToText = require('html-to-text');
const pug = require('pug');

class Email {
    constructor(user, url) {
        this.user = user;
        this.to = user.email;
        this.token = user.token;
        this.firstName = user.firstName;
        this.middleName = user.middleName || '';
        this.subject = user.subject || '';
        this.message = user.message || '';
        this.url = url;
        this.from = `Fluxx <${process.env.EMAIL_FROM}>`;
    }

    newTransport() {
        return nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });
    }

    // send the actual email
    async send(template, subject) {
        // 1) render html based on a pug template
        const html = pug.renderFile(`${__dirname}/../../template/${template}.pug`, {
            firstName: `${this.firstName} ${this.middleName}`,
            token: this.token,
            url: this.url,
            user: this.user,
            message: this.message,
            subject,
        });

        // 2) define email options
        const mailOptions = {
            from: this.from,
            to: this.to,
            subject,
            html,
            text: htmlToText.convert(html),
        };

        // 3) create a transport and send email
        await this.newTransport().sendMail(mailOptions);
    }

    async sendWelcome() {
        await this.send('welcome', 'Welcome to BRAC Allumni Association');
    }

    async sendPasswordReset() {
        await this.send('passwordReset', 'Your password reset token (valid for only 30 minutes)');
    }

    async sendSupport() {
        await this.send('support', this.subject);
    }

    async sendAccountStatus() {
        await this.send('accountStatus', "Your account's status has been changed");
    }
}

module.exports = { Email };
