const { AppError } = require('../../utils/AppError');
const { findNotificationChannelById } = require('./find-single');

const removeNotificationChannel = async (id) => {
    const channel = await findNotificationChannelById({ id });

    if (!channel) {
        throw new AppError('There is no channel with this id', 404, 'Not Found');
    }

    await channel.deleteOne();
};

module.exports = { removeNotificationChannel };
