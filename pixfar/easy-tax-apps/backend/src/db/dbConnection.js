const { connect } = require('mongoose');

// prepared url for mongodb connection
let url = process.env.MONGO_CONNECTION_STRING;
url = url.replace('<USERNAME>', process.env.MONGO_USERNAME);
url = url.replace('<PASSWORD>', process.env.MONGO_PASSWORD);
url = url.replace('<HOST>', process.env.MONGO_HOST);
url = url.replace('<PORT>', process.env.MONGO_PORT);

console.log(url);
// connect to mongodb
const DBConnection = async () => {
    await connect(url, {
        dbName: process.env.MONGO_DB_NAME,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        authSource: 'admin',
    });

    // eslint-disable-next-line no-console
    console.log('Database connected');
};

module.exports = DBConnection;
