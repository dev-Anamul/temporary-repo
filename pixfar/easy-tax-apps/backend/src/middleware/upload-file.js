const multer = require('multer');
const { v4: uuid } = require('uuid');

// multer storage
const multerStorage = multer.memoryStorage();
const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/ocrs');
    },
    filename: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|pdf|JPG|JPEG|PNG|PDF)$/)) {
            return cb(new Error('Please upload an image'));
        }

        const ext = file.mimetype.split('/')[1];
        const newFilename = `OCR-${uuid().replace(/-/g, '')}-${
            file.fieldname
        }-${Date.now()}.${ext}`;
        req.file = newFilename;
        return cb(null, newFilename);
    },
});

// define upload multer
const upload = multer({ storage: multerStorage });
const uploadDisk = multer({ storage: diskStorage });

// ocr middleware
const uploadOCRfile = uploadDisk.single('filePath');

const uploadSettingImage = upload.fields([
    { name: 'webLogo', maxCount: 1 },
    { name: 'mobileLogo', maxCount: 1 },
    { name: 'fevIcon', maxCount: 1 },
]);

// define middlewares
const uploadCSVOrXlsx = upload.single('file');
const uploadNotificationImage = upload.single('imageUrl');
const uploadNotificationChannelImage = upload.single('logo');
const uploadUserImage = upload.single('avatar');

// export the modules
module.exports = {
    uploadCSVOrXlsx,
    uploadNotificationImage,
    uploadOCRfile,
    uploadNotificationChannelImage,
    uploadUserImage,
    uploadSettingImage,
};
