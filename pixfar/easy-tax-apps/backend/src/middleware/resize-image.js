/* eslint-disable prettier/prettier */
/* eslint-disable operator-linebreak */
/* eslint-disable no-multi-spaces */
const sharp = require('sharp');
const { v4: uuid } = require('uuid');

// ! resize the image
const resizeImage =
    ({ filePrefix = 'notifications', folderName = 'notifications' }) => async (req, _res, next) => {
        if (!req.file) return next();

        req.file.filename = `${filePrefix}-${req.user._id}-${uuid().replace(
            /-/g,
            ''
        )}-${Date.now()}.jpeg`;

        await sharp(req.file.buffer)
            .resize(500, 500)
            .toFormat('jpeg')
            .jpeg({ quality: 90 })
            .toFile(`public/${folderName}/${req.file.filename}`);

        return next();
    };

const ocrResizeImage =
    ({ filePrefix = 'OCR', folderName = 'ocrs' }) => async (req, _res, next) => {
        if (!req.file) return next();

        req.file.filename = `${filePrefix}-${req.user._id}-${uuid().replace(
            /-/g,
            ''
        )}-${Date.now()}.jpeg`;

        await sharp(req.file.buffer).toFormat('jpeg').jpeg({ quality: 100 }).toFile(`public/${folderName}/${req.file.filename}`);

        return next();
    };

// resize user profile image
const resizeUserProfileImage = () => async (req, _res, next) => {
    if (!req.file) return next();

    req.file.filename = `user-${req.user._id}-${uuid().replace(/-/g, '')}-${Date.now()}.jpeg`;

    await sharp(req.file.buffer)
        .resize(300, 300)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`public/users/${req.file.filename}`);

    return next();
};

// resize setting images
const resizeSettingImage = () => async (req, _res, next) => {
    if (!req.files) return next();

    // web logo
    if (req.files?.webLogo) {
        req.files.webLogo[0].filename = `webLogo-${req.user._id}-${uuid().replace(
            /-/g,
            ''
        )}-${Date.now()}.jpeg`;

        await sharp(req.files.webLogo[0].buffer)
            .resize(200, 200)
            .toFormat('jpeg')
            .jpeg({ quality: 90 })
            .toFile(`public/settings/${req.files.webLogo[0].filename}`);
    }

    // mobile logo
    if (req.files?.mobileLogo) {
        req.files.mobileLogo[0].filename = `mobileLogo-${req.user._id}-${uuid().replace(
            /-/g,
            ''
        )}-${Date.now()}.jpeg`;

        await sharp(req.files.mobileLogo[0].buffer)
            .resize(200, 200)
            .toFormat('jpeg')
            .jpeg({ quality: 90 })
            .toFile(`public/settings/${req.files.mobileLogo[0].filename}`);
    }

    // fev icon
    if (req.files?.fevIcon) {
        req.files.fevIcon[0].filename = `fevIcon-${req.user._id}-${uuid().replace(
            /-/g,
            ''
        )}-${Date.now()}.jpeg`;

        await sharp(req.files.fevIcon[0].buffer)
            .resize(50, 50)
            .toFormat('jpeg')
            .jpeg({ quality: 90 })
            .toFile(`public/settings/${req.files.fevIcon[0].filename}`);
    }

    return next();
};

module.exports = {
 resizeImage, ocrResizeImage, resizeUserProfileImage, resizeSettingImage
};
