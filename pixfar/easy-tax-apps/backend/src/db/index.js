const DBConnection = require('./dbConnection');
const { dropCollections, dropDatabase, setUp } = require('./testDbConnection');

module.exports = {
    DBConnection,
    dropCollections,
    dropDatabase,
    setUp,
};
