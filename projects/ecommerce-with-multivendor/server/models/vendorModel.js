const { Schema, model } = require('mongoose');
const validator = require('validator');

const vendorSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'A vendor must have a name'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'A vendor must have an email'],
            unique: true,
            lowercase: true,
            trim: true,
            validate: [validator.isEmail, 'Please provide a valid email'],
        },
        phone: {
            type: String,
            required: [true, 'A vendor must have a phone number'],
            trim: true,
            validate: [validator.isMobilePhone, 'Please provide a valid phone number'],
        },
        address: {
            type: String,
            required: [true, 'A vendor must have an address'],
            trim: true,
        },
        password: {
            type: String,
            required: [true, 'A vendor must have a password'],
            trim: true,
            select: false,
        },
        city: {
            type: String,
            required: [true, 'A vendor must have a city'],
            trim: true,
        },
        state: {
            type: String,
            required: [true, 'A vendor must have a state'],
            trim: true,
        },
        country: {
            type: String,
            required: [true, 'A vendor must have a country'],
            trim: true,
        },
        pincode: {
            type: String,
            required: [true, 'A vendor must have a pincode'],
            trim: true,
        },
        status: {
            type: String,
            enum: ['active', 'inactive'],
            default: 'active',
        },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

const Vendor = model('Vendor', vendorSchema);

module.exports = Vendor;
