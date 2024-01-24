/* eslint-disable object-curly-newline */
const { default: axios } = require('axios');
const { AppError } = require('../../utils');

const sendNotificationToMultipleUsers = async ({ to, title, body, imageUrl }) => {
    const response = await axios.post(
        process.env.NOTIFICATION_URL,
        {
            registration_ids: to,
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

// export module
module.exports = {
    sendNotificationToMultipleUsers,
};
