const { Schema, model } = require('mongoose');
const validator = require('validator');

const vendorSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'A vendor must have a name'],
            trim: true,
        },
        type: {
            type: String,
            required: [true, 'A vendor must have a type'],
            trim: true,
            enum: ['superAdmin', 'admin', 'subAdmin', 'vendor'],
        },
        vendorId: {
            type: Schema.Types.ObjectId,
            required: [true, 'A vendor must have a vendorId'],
            trim: true,
            ref: 'Vendor',
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
        password: {
            type: String,
            required: [true, 'A vendor must have a password'],
            trim: true,
            select: false,
        },
        image: {
            type: String,
            required: [true, 'A vendor must have an image'],
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

const Admins = model('Admin', vendorSchema);

module.exports = Admins;
