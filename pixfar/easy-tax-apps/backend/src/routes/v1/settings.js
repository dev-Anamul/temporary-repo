const router = require('express').Router();
const settingsController = require('../../api/v1/settings');
const { authenticate } = require('../../middleware/authenticate');
const { authorize } = require('../../middleware/authorize');
const { settingsImageFilter } = require('../../middleware/file-filter');
const { resizeSettingImage } = require('../../middleware/resize-image');
const { uploadSettingImage } = require('../../middleware/upload-file');

router
    .route('/')
    .get(settingsController.findSettings)
    .post(
        authenticate,
        authorize('admin'),
        uploadSettingImage,
        settingsImageFilter,
        resizeSettingImage(),
        settingsController.createUpdateSettings
    );

module.exports = router;
