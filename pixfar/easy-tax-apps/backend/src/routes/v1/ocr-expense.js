const router = require('express').Router();
const { authorize } = require('../../middleware/authorize');
const ocrController = require('../../api/v1/ocr-expense');
const { uploadOCRfile } = require('../../middleware/upload-file');
const { imageFilter } = require('../../middleware/file-filter');
const { resizeImage } = require('../../middleware/resize-image');

// routes ocr-expense

router.post('/process', authorize('admin'), ocrController.ocrProcess);

router.get('/report', authorize('customer'), ocrController.findSingleOcrExpense);

router
    .route('/')
    .get(authorize('customer'), ocrController.findOCRForUser)
    .post(authorize('customer'), uploadOCRfile, ocrController.createOCR);

router
    .route('/:id')
    .get(authorize('customer'), ocrController.findSingleOcrExpense)
    .patch(
        authorize('customer'),
        // uploadOCRImage,
        imageFilter,
        resizeImage({ filePrefix: 'OCR', folderName: 'ocrs' }),
        ocrController.updateOCRExpense
    )
    .delete(authorize('customer'), ocrController.removeOCRExpense);

module.exports = router;
