const _default = require('../config/default');

// this function will return an object with pagination properties
const generatePagination = ({ page = _default.page, limit = _default.limit, totalItems = 0 }) => {
    // count total pages
    const totalPages = Math.ceil(totalItems / limit);

    // check if has next page
    const hasNextPage = page < totalPages;

    // check if has previous page
    const hasPreviousPage = page > 1;

    // calculate next page
    const nextPage = hasNextPage ? page + 1 : null;

    // calculate previous page
    const prevPage = hasPreviousPage ? page - 1 : null;

    // calculate offset
    const offset = (page - 1) * limit;

    // return pagination object
    return {
        page,
        limit,
        offset,
        nextPage,
        prevPage,
        totalPages,
        totalItems,
    };
};

module.exports = { generatePagination };
