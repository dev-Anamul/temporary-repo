const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const dayjs = require('dayjs');
const { IncomeSource } = require('../../model');

const generateCsv = async () => {
    const data = await IncomeSource.find().populate({
        path: 'userId',
        select: ['fullName', 'email'],
    });
    const header = [
        { id: '_id', title: 'ID' },
        { id: 'incomeSource', title: 'Income Source' },
        { id: 'description', title: 'Description' },
        { id: 'amount', title: 'Amount' },
        { id: 'incomeType', title: 'Income Type' },
        { id: 'fullName', title: 'Full Name' },
        { id: 'email', title: 'Email' },
        { id: 'incomeDate', title: 'Income Date' },
        { id: 'createdAt', title: 'Created AT' },
    ];

    // formatted data
    const formattedData = data?.map((item) => ({
        _id: item._id,
        incomeSource: item.incomeSource,
        description: item.description,
        amount: item.amount,
        incomeType: item.incomeType,
        fullName: item.userId.fullName,
        email: item.userId.email,
        incomeDate: dayjs(item.incomeDate).format('DD/MM/YYYY'),
        createdAt: dayjs(item.createdAt).format('DD/MM/YYYY'),
    }));

    const path = 'csv/income-source.csv';

    const csvWriter = createCsvWriter({
        path: `public/${path}`,
        header,
    });

    // write data to csv
    await csvWriter.writeRecords(formattedData);

    return {
        path: `${process.env.APP_URL}/${path}`,
    };
};

module.exports = { generateCsv };
