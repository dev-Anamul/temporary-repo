exports.uncaughtExceptionHandler = (err) => {
    console.log(err.name, err.message, err.stack);
    console.log('UNCAUGHT EXCEPTION! Shutting down...');
    process.exit(1);
};

exports.unhandleRejctionHandler = (server) => {
    process.on('unhandledRejection', (err) => {
        console.log(err);
        console.log(err.name, err.message);
        console.log('UNHANDLED REJECTION! Shutting down...');
        server.close(() => {
            process.exit(1);
        });
    });
};
