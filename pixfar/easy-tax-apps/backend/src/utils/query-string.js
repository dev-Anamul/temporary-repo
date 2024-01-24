/* eslint-disable prettier/prettier */
const generateQueryString = (params) => Object.keys(params)
        .map((key) => `${key}=${params[key]}`)
        .join('&');

module.exports = { generateQueryString };
