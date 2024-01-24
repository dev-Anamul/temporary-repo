/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const OpenApiValidator = require('express-openapi-validator');

const swaggerDocument = YAML.load('./swagger.yaml');

const applyMiddleware = (app) => {
    app.use(express.json());
    app.use(express.text({ type: '/' }));
    app.use(express.urlencoded({ extended: false }));
    app.use(cors());
    app.use(morgan('dev'));
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.use(
        OpenApiValidator.middleware({
            apiSpec: 'swagger.yaml',
            ignorePaths: (path) =>
                path.includes('/bulk') ||
                path.includes('/notifications') ||
                path.includes('/expenses') ||
                path.includes('update-profile') ||
                path.includes('settings') ||
                path.includes('tax') ||
                path.includes('/ocr-expenses'),
        })
    );
};

module.exports = applyMiddleware;
