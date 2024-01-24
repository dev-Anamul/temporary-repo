/* eslint-disable object-curly-newline */
const { catchAsync } = require('../../../../utils');
const supportMessageService = require('../../../../lib/support-message');

const addSupportMessage = catchAsync(async (req, res) => {
    const { message, subject, name, email, address } = req.body || {};

    const supportMessage = await supportMessageService.createSupportMessage({
        message,
        userId: req.user._id,
        address,
        email,
        name,
        subject,
        type: 'receive',
    });

    const response = {
        code: 201,
        status: 'success',
        message: 'Support Message created successfully',
        data: {
            supportMessage,
        },

        links: {
            self: req.originalUrl,
        },
    };

    res.status(201).json(response);
});

module.exports = { addSupportMessage };
