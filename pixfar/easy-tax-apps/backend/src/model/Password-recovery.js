const { model, Schema } = require('mongoose');

const passwordRecoverySchema = new Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, 'User must have an email'],
        unique: [true, 'Email already exists'],
    },
    token: {
        type: String,
        trim: true,
        required: [true, 'User must have a token'],
    },
    expires: {
        type: Date,
        required: [true, 'User must have a token expiration date'],
    },
});

// create the model
const PasswordRecovery = model('PasswordRecovery', passwordRecoverySchema);

// export the model
module.exports = PasswordRecovery;
