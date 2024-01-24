/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
const { catchAsync, AppError, generateGstClaimableAmount } = require('../../../../utils');
const expenseService = require('../../../../lib/expense');
const { sendNotificationToSingleUser } = require('../../../../lib/fcm-notification');
const userService = require('../../../../lib/user');
const { saveNotification } = require('../../../../lib/notifications/save-notification');
const assetsService = require('../../../../lib/asset');

const updateExpense = catchAsync(async (req, res, next) => {
    // extract id from the request params
    const { id } = req.params || {};

    // extract data from request body
    const {
        description,
        expenseType,
        expenseName,
        isGSTClaimable,
        expenseDate,
        totalAmount,
        gstAmount,
        claimableAmount,
        ocrAmount,
        status,
        filePath,
        isAsset,
    } = req.body || {};

    // check if expense exists with this id
    const foundExpense = await expenseService.expenseById(id);
    if (!foundExpense) {
        return next(new AppError('No expense found with this id', 404, 'Not Found'));
    }

    // calculate required amount
    let gstClaimableAmount = gstAmount || 0;
    let claimAmount = claimableAmount || 0;
    let subTotal = totalAmount;

    // if isGSTClaimable is true then calculate gst claimable amount
    // if isGST claimable is true
    if (JSON.parse(isGSTClaimable) === true && foundExpense.isGSTClaimable === false) {
        gstClaimableAmount = generateGstClaimableAmount({
            amount: totalAmount,
            isGSTClaimable: JSON.parse(isGSTClaimable),
        });
        subTotal = totalAmount - gstClaimableAmount;
        claimAmount = (subTotal * foundExpense.expenseType.claimablePercentage).toFixed(2);
    }

    // if isGSTClaimable is false then calculate gst claimable amount
    if (JSON.parse(isGSTClaimable) === false && foundExpense.isGSTClaimable === true) {
        subTotal = foundExpense.totalAmount + foundExpense.gstAmount;
        gstClaimableAmount = 0;
        claimAmount = (subTotal * foundExpense.expenseType.claimablePercentage).toFixed(2);
    }

    // find the user who created this expense
    const user = await userService.getUserById(foundExpense?.userId);

    // define the initial status and check if user is admin
    // if user is admin then status is approved
    let updatedStatus = status;

    // if user is customer then status is pending
    if (req?.user?.role === 'customer') {
        updatedStatus = ocrAmount === subTotal ? 'approved' : 'pending';
    }

    // check if status is approved, amount is  greater than 1000
    // and depreciation rate is greater than 0 added it to the assets collection
    if (updatedStatus === 'approved' && totalAmount >= 1000 && isAsset) {
        // create asset
        await assetsService.addAsset({
            name: expenseName,
            description,
            purchaseDate: expenseDate,
            purchasePrice: totalAmount,
            userId: foundExpense.userId,
            accumulatedDepreciation: 0,
            endingValue: totalAmount,
            lastDepreciationDate: expenseDate,
            category: expenseType,
        });
    }

    // update expense
    const expense = await expenseService.updateExpense({
        id,
        description,
        expenseType,
        expenseName,
        isGSTClaimable,
        expenseDate,
        totalAmount,
        gstAmount: gstClaimableAmount,
        claimableAmount: claimAmount,
        ocrAmount,
        filePath,
        status: updatedStatus,
        type: 'asset',
    });

    // generate response for the request
    const response = {
        code: 200,
        success: true,
        message: 'Successfully updated expense',
        expense,
        links: {
            self: req.originalUrl,
            all_expense: '/api/v1/expenses',
        },
    };

    // if user is customer then send response
    if (req?.user?.role === 'customer') {
        return res.status(200).json(response);
    }

    // if status are different, send notification to user
    try {
        if (foundExpense.status !== status && status === 'rejected') {
            await sendNotificationToSingleUser({
                to: user?.notificationToken || '',
                title: 'Expense status updated',
                body: `Your expense status has been updated to ${status}`,
                imageUrl: '',
            });

            // save notification to db
            await saveNotification({
                id: user._id,
                title: 'Expense status updated',
                body: `Your expense status has been updated to ${status}`,
                imageUrl: '',
                status: 'success',
                notificationType: 'single',
            });
        }
    } catch (error) {
        // is is there any error revert the updated data
        await expenseService.updateExpense({
            id,
            totalAmount: foundExpense.totalAmount,
            description: foundExpense.description,
            expenseType: foundExpense.expenseType,
            expenseName: foundExpense.expenseName,
            isGSTClaimable: foundExpense.isGSTClaimable,
            expenseDate: foundExpense.expenseDate,
            status: foundExpense.status,
        });

        throw error;
    }

    // send response
    return res.status(200).json(response);
});

module.exports = { updateExpense };
