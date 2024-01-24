const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const dayjs = require('dayjs');
const { Expense } = require('../../model');

async function generateCsv() {
    // find all expenses for a user
    const data = await Expense.find()
        .populate({
            path: 'expenseType',
            select: ['name'],
        })
        .populate({
            path: 'userId',
            select: ['fullName', 'email'],
        });

    // create csv writer

    const header = [
        { id: '_id', title: 'ID' },
        { id: 'expenseType', title: 'Expense Type' },
        { id: 'description', title: 'Description' },
        { id: 'totalAmount', title: 'Amount' },
        { id: 'claimableAmount', title: 'Claimable Amount' },
        { id: 'fullName', title: 'Full Name' },
        { id: 'email', title: 'Email' },
        { id: 'isGSTClaimable', title: 'Is GST Claimable' },
        { id: 'expenseDate', title: 'Expense Date' },
        { id: 'createdAt', title: 'Created AT' },
    ];

    // formatted data
    const formattedData = data.map((item) => ({
        _id: item._id,
        expenseType: item.expenseType.name,
        description: item.description,
        totalAmount: item.totalAmount,
        claimableAmount: item.claimableAmount,
        fullName: item.userId.fullName,
        email: item.userId.email,
        isGSTClaimable: item.isGSTClaimable ? 'Yes' : 'No',
        expenseDate: dayjs(item.expenseDate).format('DD/MM/YYYY'),
        createdAt: dayjs(item.createdAt).format('DD/MM/YYYY'),
    }));

    const path = 'csv/expense.csv';

    const csvWriter = createCsvWriter({
        path: `public/${path}`,
        header,
    });

    // write data to csv
    await csvWriter.writeRecords(formattedData);

    return {
        path: `${process.env.APP_URL}/${path}`,
    };
}

module.exports = { generateCsv };
