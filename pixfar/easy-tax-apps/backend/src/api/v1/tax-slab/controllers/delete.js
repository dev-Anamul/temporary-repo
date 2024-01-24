const { catchAsync } = require('../../../../utils');
const taxSlabService = require('../../../../lib/tax-slab');

const deleteTaxSlab = catchAsync(async (req, res) => {
    const { id } = req.params;

    await taxSlabService.deleteTaxSlab(id);

    const response = {
        code: 200,
        status: 'success',
        message: 'Tax slab deleted successfully',
    };

    res.status(200).json(response);
});

module.exports = { deleteTaxSlab };
