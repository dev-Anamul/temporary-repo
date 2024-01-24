/* eslint-disable operator-linebreak */
/* eslint-disable no-nested-ternary */
const { AppError } = require('../utils');
const { formatCsv } = require('../utils/format-csv');

// accept only csv files
const csvFilter = (req, res, next) => {
    const { file } = req || {};

    // check if file is not present
    if (!file) return next();

    // check if file is not a csv file or excel file
    if (file.mimetype !== 'text/csv' && file.mimetype !== 'application/vnd.ms-excel') {
        return next(
            new AppError(
                'Invalid file type. Only CSV and Excel files are allowed!',
                400,
                'Bad Request'
            )
        );
    }

    // convert the buffer data to string
    const data = file.buffer.toString();

    // format and set the data to req.body
    req.body.data = formatCsv(data);

    // return next middleware
    return next();
};

// image filter
const imageFilter = (req, _res, next) => {
    const { file } = req || {};
    // check if file is not present
    if (!file) return next();

    // check file size
    if (file.size > 1024 * 1024 * 5) {
        return next(new AppError('Image size should not be more than 5MB', 400, 'Bad Request'));
    }

    // check if file is not an image file
    if (
        file.mimetype !== 'image/png' &&
        file.mimetype !== 'image/jpg' &&
        file.mimetype !== 'image/jpeg' &&
        file.mimetype !== 'application/pdf'
    ) {
        return next(
            new AppError('Invalid file type. Only PNG, JPG , JPEG and PDF files are allowed!', 400)
        );
    }

    // return next middleware
    return next();
};

// filter settings image
const settingsImageFilter = (req, _res, next) => {
    const { webLogo, mobileLogo, fevIcon } = req.files || {};

    // check mime type jpg, jpeg, png
    if (
        webLogo &&
        webLogo?.[0].mimetype !== 'image/png' &&
        webLogo?.[0].mimetype !== 'image/jpg' &&
        webLogo?.[0].mimetype !== 'image/jpeg'
    ) {
        return next(new AppError('Invalid file type. Only PNG and JPG files are allowed!', 400));
    }

    // check mime type jpg, jpeg, png
    if (
        mobileLogo &&
        mobileLogo?.[0].mimetype !== 'image/png' &&
        mobileLogo?.[0].mimetype !== 'image/jpg' &&
        mobileLogo?.[0].mimetype !== 'image/jpeg'
    ) {
        return next(new AppError('Invalid file type. Only PNG and JPG files are allowed!', 400));
    }

    // check mime type jpg, jpeg, png
    if (
        fevIcon &&
        fevIcon?.[0].mimetype !== 'image/png' &&
        fevIcon?.[0].mimetype !== 'image/jpg' &&
        fevIcon?.[0].mimetype !== 'image/jpeg'
    ) {
        return next(new AppError('Invalid file type. Only PNG and JPG files are allowed!', 400));
    }

    // check file size 5MB
    if (webLogo && webLogo?.[0].size > 1024 * 1024 * 5) {
        return next(new AppError('Image size should not be more than 5MB', 400));
    }

    // check file size 5MB
    if (mobileLogo && mobileLogo?.[0].size > 1024 * 1024 * 5) {
        return next(new AppError('Image size should not be more than 5MB', 400));
    }

    // check file size 5MB
    if (fevIcon && fevIcon?.[0].size > 1024 * 1024 * 5) {
        return next(new AppError('Image size should not be more than 5MB', 400));
    }

    // return next middleware
    return next();
};

// export modules
module.exports = {
    csvFilter,
    imageFilter,
    settingsImageFilter,
};
