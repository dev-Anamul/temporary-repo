const _default = require('../../../../config/default');
const { catchAsync, generatePagination, generateLinks } = require('../../../../utils');
const incomeSourceService = require('../../../../lib/income-source');
const fiscalYearService = require('../../../../lib/fiscal-year');

const findAllForAdmin = catchAsync(async (req, res) => {
    const page = parseInt(req.query.page, 10) || _default.page;
    const limit = parseInt(req.query.limit, 10) || _default.limit;
    const sort = req.query.sort || _default.sort;
    const order = req.query.order || _default.order;
    const search = req.query.search || _default.search;
    const fields = req.query.fields || _default.fields;
    const incomeSource = req.query.incomeSource || '';
    const incomeType = req.query.incomeType || '';
    const fiscalYear = req.query.fiscalYear || '';

    // find the fiscal year
    let foundFiscalYear;

    if (fiscalYear) {
        foundFiscalYear = await fiscalYearService.findFiscalYearById(fiscalYear);
    }

    const { data, totalItems } = await incomeSourceService.findAllForAdmin({
        page,
        limit,
        sort,
        order,
        search,
        fields,
        incomeSource,
        incomeType,
        startDate: foundFiscalYear?.startDate || '',
        endDate: foundFiscalYear?.endDate || '',
    });

    // generate pagination
    const pagination = generatePagination({ page, limit, totalItems });

    // generate links
    const links = generateLinks({
        baseUrl: req.baseUrl,
        query: req.query,
        page,
        totalPages: pagination?.totalPages,
    });

    // generate response
    const response = {
        code: 200,
        success: true,
        message: 'Successfully retrieved expenses',
        data,
        links,
        pagination,
    };

    // send response
    res.status(200).json(response);
});

module.exports = { findAllForAdmin };
