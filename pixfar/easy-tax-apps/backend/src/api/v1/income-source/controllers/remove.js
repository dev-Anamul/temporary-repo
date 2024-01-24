const { catchAsync } = require('../../../../utils');
const incomeSourceService = require('../../../../lib/income-source');

const remove = catchAsync(async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;

    await incomeSourceService.removeOne({ id, userId });

    const response = {
        code: 200,
        status: 'success',
        message: 'Successfully deleted income source',
    };

    return res.status(200).json(response);
});

module.exports = { remove };
