/* eslint-disable no-console */
require('dotenv').config();
const http = require('http');
const app = require('./app');
const { DBConnection } = require('./db');
const { createAdminUser } = require('./lib/user/createAdminUser');
// const { generateGivenNumberUserAndPersistInJsonFile } = require('../seed/user-seed');

const port = process.env.PORT || 5555;

// create server
const server = http.createServer(app);

// generate seed data
// generateGivenNumberUserAndPersistInJsonFile(10);

const main = async () => {
    try {
        await DBConnection();
        server.listen(port, async () => {
            // create admin user
            await createAdminUser();

            // log server listening port
            console.log(`Server listening on port ${port}`);
        });
    } catch (error) {
        console.log('Error connecting to database: ', error.message);
        console.log(error);
    }
};

main();
