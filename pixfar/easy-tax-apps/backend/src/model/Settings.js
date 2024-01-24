const { Schema, model } = require('mongoose');

const SettingsSchema = new Schema(
    {
        webLogo: {
            type: String,
        },
        mobileLogo: {
            type: String,
        },
        fevIcon: {
            type: String,
        },
        title: {
            type: String,
        },
        appTitle: {
            type: String,
        },
        appDescription: {
            type: String,
        },
        fiscalStartMonth: {
            type: Number,
        },
        fiscalEndMonth: {
            type: Number,
        },
    },
    {
        timestamps: true,
        versionKey: false,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

const Settings = model('Settings', SettingsSchema);

module.exports = Settings;
