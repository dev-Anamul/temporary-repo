const { model, Schema } = require('mongoose');
const applyBaseSchema = require('./baseSchema');

const loginHistorySchema = new Schema({
    OID: {
        type: Schema.Types.ObjectId,
        required: true,
        auto: true,
    },
    DateLogin: {
        type: Date,
        required: true,
        validate: {
            validator(value) {
                // Custom validation logic for future date
                return value > Date.now();
            },
            message: 'Login date must be a future date.',
        },
    },
    FacilityID: {
        type: Schema.Types.ObjectId,
        ref: 'Facility',
        required: true,
    },
    UserAccountID: {
        type: Schema.Types.ObjectId,
        ref: 'UserAccount',
        required: true,
    },
});

// apply base schema
applyBaseSchema(loginHistorySchema);

// create model
const LoginHistory = model('LoginHistory', loginHistorySchema);

// export model
module.exports = LoginHistory;
