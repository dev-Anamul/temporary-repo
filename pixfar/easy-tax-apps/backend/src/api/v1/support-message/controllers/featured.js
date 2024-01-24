const { catchAsync } = require('../../../../utils');
const supportService = require('../../../../lib/support-message');

const makeOrRemoveFeaturedController = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { featured } = req.body || {};

    const updatedFeatured = await supportService.makeOrRemoveFeatured({
        id,
        featured,
    });

    const response = {
        code: 200,
        status: 'success',
        message: 'Successfully updated featured',
        data: updatedFeatured,
        links: {
            self: req.originalUrl,
            all: '/api/v1/featured',
        },
    };

    return res.status(200).json(response);
});

module.exports = { makeOrRemoveFeaturedController };
