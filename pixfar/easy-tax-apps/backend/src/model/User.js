const { model, Schema } = require('mongoose');

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            trim: true,
            minLength: [2, 'First name must be greater or equal 2 characters'],
            maxLength: [20, 'First name must be lower or equal 20 characters'],
            required: [true, 'User must have a first name'],
        },
        middleName: {
            type: String,
            trim: true,
        },
        lastName: {
            type: String,
            trim: true,
            minLength: [2, 'Last name must be greater or equal 2 characters'],
            maxLength: [20, 'Last name must be lower or equal 20 characters'],
            required: [true, 'User must have a last name'],
        },
        fullName: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            required: [true, 'User must have an email'],
            unique: [true, 'Email already exists'],
        },
        mobile: {
            type: String,
            required: [true, 'User must have a mobile number'],
            trim: true,
        },
        dateOfBirth: {
            type: Date,
            required: [true, 'User must have date of birth'],
            max: Date.now(),
        },
        password: {
            type: String,
            required: [true, 'User must have a password'],
            minLength: [8, 'Password must be greater or equal 8 character'],
        },
        address: {
            type: String,
            trim: true,
        },
        status: {
            type: String,
            trim: true,
            enum: ['pending', 'approved', 'rejected'],
            default: 'approved',
        },

        role: {
            type: String,
            trim: true,
            enum: ['customer', 'admin', 'superadmin'],
            default: 'customer',
            required: [true, 'User must have a role'],
        },
        notificationToken: {
            type: String,
        },
        termsAndConditions: {
            type: Boolean,
            required: [true, 'User must have a terms and conditions'],
        },
        irdNumber: {
            type: String,
            trim: true,
        },
        avatar: {
            type: String,
            trim: true,
        },
        passwordChangedAt: Date,
    },
    {
        versionKey: false,
        timestamps: true,
        virtuals: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

userSchema.pre('save', function (next) {
    this.fullName = '';
    if (this.firstName) {
        this.fullName += this.firstName;
    }
    if (this.middleName) {
        this.fullName += ` ${this.middleName}`;
    }
    if (this.lastName) {
        this.fullName += ` ${this.lastName}`;
    }

    next();
});

const User = model('User', userSchema);
module.exports = User;
