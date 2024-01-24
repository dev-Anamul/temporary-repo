const schedule = require("node-schedule");
const axios = require("axios");
const nodemailer = require("nodemailer");

// Define the URLs to call
const url1 = "https://staging-tuso.api.arcapps.org/tuso-api/rdp-devices";
const url2 =
  "https://staging-tuso.api.arcapps.org/tuso-api/rdp-device-info-list";

// Define the email parameters
const emailFrom = "sender@example.com";
const emailSubject = "Data Merge Notification";

// Define the function to call the APIs, merge the data, and send emails
const job = async () => {
  try {
    // Call the APIs
    const response1 = await axios.get(url1);
    const response2 = await axios.get(url2);

    // Merge the data
    const mergedData = [...response1.data, ...response2.data];

    console.log(mergedData);

    // Send emails to each user in the merged data
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    for (const user of mergedData) {
      const mailOptions = {
        from: "anamul <anamul522@gmail.com>",
        to: "anamuljibon522@gmail.com",
        subject: emailSubject,
        text: `Dear ${user.name},\n\nYour data has been merged successfully.\n\nRegards,\nScheduler`,
      };

      await transporter.sendMail(mailOptions);
    }

    console.log("Job completed successfully");
  } catch (error) {
    console.error(error);
  }
};

// Schedule the job to run every day at 8:00 AM
schedule.scheduleJob("30 * * * * *", job);
