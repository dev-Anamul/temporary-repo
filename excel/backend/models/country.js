const { model, Schema } = require('mongoose');
const applyBaseSchema = require('./baseSchema');

const countrySchema = new Schema(
    {
        countryName: {
            type: String,
            required: true,
            maxlength: 90,
            validate: {
                validator: (value) => /^[A-Za-z]+$/.test(value),
                message: 'Country name must only contain alphabetic characters',
            },
        },
        isoCodeAlpha2: {
            type: String,
            required: true,
            maxlength: 2,
        },
        countryCode: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 4,
            validate: {
                validator: (value) => /^[A-Z]+$/.test(value),
                message: 'Country code must only contain uppercase letters',
            },
        },
        clients: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Client',
            },
        ],
    },
    { timestamps: true }
);

// merge base schema
applyBaseSchema(countrySchema);

// create model
const Country = model('Country', countrySchema);

// export model
module.exports = Country;
