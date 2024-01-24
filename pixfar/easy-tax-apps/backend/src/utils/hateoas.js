/* eslint-disable object-curly-newline */
const _default = require('../config/default');
const { generateQueryString } = require('./query-string');

const generateLinks = ({ query, page = _default.page, baseUrl, totalPages }) => {
    // generate first and last page links
    const firstQueryString = generateQueryString({ ...query, page: 1 });
    const lastQueryString = generateQueryString({ ...query, page: totalPages });

    console.log('page=> ', page, 'totalPage=>', totalPages);
    const links = {
        first: `${baseUrl}?${firstQueryString}`,
        last: `${baseUrl}?${lastQueryString}`,
        prev: null,
        next: null,
    };
    if (page > 1) {
        const prevQueryString = generateQueryString({ ...query, page: page - 1 });
        links.prev = `${baseUrl}?${prevQueryString}`;
    }
    if (page < totalPages) {
        const nextQueryString = generateQueryString({ ...query, page: page + 1 });
        links.next = `${baseUrl}?${nextQueryString}`;
    }
    return links;
};

module.exports = { generateLinks };
