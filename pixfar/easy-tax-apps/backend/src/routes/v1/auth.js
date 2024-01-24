const router = require('express').Router();
const authController = require('../../api/v1/auth');
const { authenticate } = require('../../middleware/authenticate');
const { imageFilter } = require('../../middleware/file-filter');
const { resizeUserProfileImage } = require('../../middleware/resize-image');
const { uploadUserImage } = require('../../middleware/upload-file');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/forgot-password', authController.forgotPassword);
router.patch('/update-password', authenticate, authController.updatePassword);
router.patch(
    '/update-profile',
    authenticate,
    uploadUserImage,
    imageFilter,
    resizeUserProfileImage(),
    authController.updateProfile
);
router.get('/profile', authenticate, authController.getProfile);
router.delete('/delete-profile', authenticate, authController.deleteAccount);
router.post('/reset-password', authController.resetPassword);

module.exports = router;
