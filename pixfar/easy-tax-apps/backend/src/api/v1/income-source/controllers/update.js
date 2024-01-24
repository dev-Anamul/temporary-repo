/* eslint-disable object-curly-newline */
const { catchAsync, AppError } = require('../../../../utils');
const incomeSourceService = require('../../../../lib/income-source');
const { sendNotificationToSingleUser } = require('../../../../lib/fcm-notification');
const userService = require('../../../../lib/user');
const { saveNotification } = require('../../../../lib/notifications/save-notification');

const updateOne = catchAsync(async (req, res) => {
    // eslint-disable-next-line operator-linebreak
    const { incomeSource, amount, incomeType, description, startDate, endDate, status } =
        req.body || {};
    const { id } = req.params || {};

    // find the income source
    const foundIncomeSource = await incomeSourceService.findIncomeSourceById(id);

    // check if the income source exists
    if (!foundIncomeSource) throw new AppError('Income source does not exist', 400, 'Bad Request');

    // update the income source
    const updatedIncomeSource = await incomeSourceService.update({
        id,
        incomeSource,
        amount,
        incomeType,
        description,
        startDate,
        endDate,
        status,
    });

    // find user
    const user = await userService.getUserById(foundIncomeSource.userId);

    // check if the status has been changed
    try {
        if (foundIncomeSource.status !== status) {
            // send notification to the user
            await sendNotificationToSingleUser({
                to: user.notificationToken || '',
                title: 'Income Status Updated',
                body: `Your income source ${foundIncomeSource.incomeSource} status has been updated to ${status}`,
                imageUrl: '',
            });

            // save notification to db
            await saveNotification({
                id: user._id,
                title: 'Income Source Updated',
                body: `Your income source ${foundIncomeSource.incomeSource} has been updated to ${status}`,
                imageUrl: '',
                status: 'success',
                notificationType: 'single',
            });
        }
    } catch (error) {
        // if there is any error, revert the updated data
        await incomeSourceService.update({
            id,
            incomeSource: foundIncomeSource.incomeSource,
            amount: foundIncomeSource.amount,
            incomeType: foundIncomeSource.incomeType,
            description: foundIncomeSource.description,
            startDate: foundIncomeSource.startDate,
            endDate: foundIncomeSource.endDate,
            status: foundIncomeSource.status,
        });

        // throw the error
        throw error;
    }

    // generate response
    const response = {
        code: 200,
        status: 'success',
        message: 'Successfully updated income source',
        data: updatedIncomeSource,
        links: {
            self: req.originalUrl,
            all: req.baseUrl,
        },
    };

    // send response
    return res.status(200).json(response);
});

module.exports = { updateOne };
