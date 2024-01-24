const { catchAsync } = require('../../../../utils');
const supportMessageService = require('../../../../lib/support-message');

const deleteMessage = catchAsync(async (req, res) => {
    const { id } = req.params || {};

    await supportMessageService.deleteSupportMessage(id);

    const response = {
        code: 200,
        status: 'success',
        message: 'Support Message deleted successfully',
    };

    res.status(200).json(response);
});

module.exports = { deleteMessage };
