// external dependencies
const bcrypt = require('bcryptjs');
const { model, Schema } = require('mongoose');
const { sex, userTypes } = require('../constraints/enumerators');
const applyBaseSchema = require('./baseSchema');

const userAccountSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            maxlength: 60,
            minlength: 2,
        },
        surname: {
            type: String,
            required: true,
            maxlength: 60,
            minlength: 2,
        },
        dob: {
            type: Date,
            required: true,
        },
        sex: {
            type: String,
            required: true,
            enum: [...sex],
        },
        designation: {
            type: String,
            maxlength: 60,
            default: null,
        },
        nrc: {
            type: String,
            required: true,
            validate: {
                validator(value) {
                    return /^[0-9][0-9][0-9][0-9][0-9][0-9]\/[0-9][0-9]\/[0-9]$/.test(value);
                },
                message: 'Invalid NRC format',
            },
        },
        noNrc: {
            type: Boolean,
            default: false,
        },
        contactAddress: {
            type: String,
            required: true,
            maxlength: 500,
        },
        countryCode: {
            type: String,
            required: true,
            maxlength: 4,
        },
        cellphone: {
            type: String,
            required: true,
            maxlength: 20,
            unique: true,
        },
        userName: {
            type: String,
            required: true,
            maxlength: 30,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        userType: {
            type: String,
            required: true,
            enum: [...userTypes],
        },
        isAccountActive: {
            type: Boolean,
            default: false,
        },
        passwordChangeAT: Date,
    },
    { versionKey: false }
);

// apply base schema
applyBaseSchema(userAccountSchema);

// ! set pswword change at property if change password
userAccountSchema.pre('save', function (next) {
    if (!this.isModified('password') || this.isNew) return next();
    this.passwordChangeAT = Date.now() - 1000;
    return next();
});

// hash password
userAccountSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

//  compare password
userAccountSchema.methods.comparePassword = async (cadidatePassword, userPassword) => {
    const comparisonResult = await bcrypt.compare(cadidatePassword, userPassword);
    return comparisonResult;
};

// ! change password after issuing jwt token
userAccountSchema.methods.changePasswordAfterCreateJwt = function (jwtTimeStap) {
    if (this.passwordChangeAT) {
        const passChanged = parseInt(this.passwordChangeAT.getTime() / 1000, 10);
        return passChanged > jwtTimeStap;
    }
    return false;
};

const UserAccount = model('UserAccount', userAccountSchema);
module.exports = UserAccount;
