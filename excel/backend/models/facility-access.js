const { model, Schema } = require('mongoose');
const applyBaseSchema = require('./baseSchema');

const facilityAccessSchema = new Schema(
    {
        dateRequested: {
            type: Date,
            default: Date.now(),
            required: true,
        },
        dateApproved: {
            type: Date,
            default: null,
        },
        isApproved: {
            type: Boolean,
            required: true,
            default: false,
        },
        isIgnored: {
            type: Boolean,
            required: true,
            default: false,
        },
        forgotPassword: {
            type: Boolean,
            default: false,
        },
        userAccountID: {
            type: Schema.Types.ObjectId,
            ref: 'UserAccount',
        },
        // facilityID: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'Facility',
        // },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

applyBaseSchema(facilityAccessSchema);
const FacilityAccess = model('FacilityAccess', facilityAccessSchema);

module.exports = FacilityAccess;
