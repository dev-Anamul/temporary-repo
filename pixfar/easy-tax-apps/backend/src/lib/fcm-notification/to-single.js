/* eslint-disable object-curly-newline */
const axios = require('axios');
const { AppError } = require('../../utils');

const sendNotificationToSingleUser = async ({ to = '', title, body, imageUrl }) => {
    // check if the user has notification token
    if (!to) throw new AppError('User has no notification token', 400, 'Bad Request');

    const response = await axios.post(
        process.env.NOTIFICATION_URL,
        {
            to,
            notification: {
                title,
                body,
                image_url: imageUrl,
            },
            data: {
                title,
                body,
                image_url: imageUrl,
            },
        },
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.NOTIFICATION_AUTH}`,
            },
        }
    );

    if (response.success === 0) {
        throw new AppError('Failed to send notification', 500, 'Internal Server Error');
    }

    return response.data;
};
module.exports = {
    sendNotificationToSingleUser,
};
