const { model, Schema } = require('mongoose');
const applyBaseSchema = require('./baseSchema');

const recoveryRequestSchema = new Schema({
    OID: {
        type: Schema.Types.ObjectId,
        required: true,
        auto: true,
    },
    Username: {
        type: String,
        maxlength: 20,
    },
    CountryCode: {
        type: String,
        maxlength: 4,
        validate: {
            validator(value) {
                // Custom validation logic for country code
                return /^[a-zA-Z]{2}$/.test(value);
            },
            message: 'Invalid country code.',
        },
    },
    Cellphone: {
        type: String,
        maxlength: 20,
        validate: {
            validator(value) {
                // Custom validation logic for cellphone number
                return /^\d+$/.test(value);
            },
            message: 'Cellphone must be a valid number.',
        },
    },
    DateRequested: {
        type: Date,
        required: true,
        validate: {
            validator(value) {
                // Custom validation logic for future date
                return value > Date.now();
            },
            message: 'Date requested must be a future date.',
        },
    },
    IsRequestOpen: {
        type: Boolean,
        default: false,
    },
});

// apply base schema
applyBaseSchema(recoveryRequestSchema);

// create model
const RecoveryRequest = model('RecoveryRequest', recoveryRequestSchema);

// export model
module.exports = RecoveryRequest;
