const mongoose = require('mongoose');
require('dotenv').config();

// ! database url
const DB = process.env.DATABASE_URL;

// ! Db connection
const connecWithRetry = async () => {
    try {
        await mongoose.connect(DB, {
            useNewUrlParser: true,
        });
    } catch (error) {
        setTimeout(() => {
            connecWithRetry();
        }, 5000);
    }
};

module.exports = connecWithRetry;
