// external dependencies
const dotenv = require('dotenv');
const http = require('http');

// internal dependencies
const exceptionHndler = require('./middlewares/exception-error-handler');
const dbConnection = require('./config/db-connection');

// uncaught exception handler
process.on('uncaughtException', exceptionHndler.uncaughtExceptionHandler);

// configure environment variables
dotenv.config();

// Internal dependencies
const app = require('./app');

// create server
const server = http.createServer(app);

// connect to database
dbConnection()
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((err) => {
        console.log(err);
    });

// Port
const port = process.env.PORT || 8000;

// Start server
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
// unhandled rejection handler
exceptionHndler.unhandleRejctionHandler(server);
