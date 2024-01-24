const { model, Schema } = require('mongoose');
const applyBaseSchema = require('./baseSchema');

// Define the Facility schema
const facilitySchema = new Schema({
    facilityName: {
        type: String,
        required: true,
        maxlength: 90,
    },
    hmisCode: {
        type: String,
        maxlength: 60,
    },
    longitude: {
        type: String,
        maxlength: 20,
    },
    latitude: {
        type: String,
        maxlength: 20,
    },
    isPrivateFacility: {
        type: Boolean,
        default: false,
    },
    districtID: {
        type: Schema.Types.ObjectId,
        ref: 'District',
        required: true,
    },
    attachedFacilities: [
        {
            type: Schema.Types.ObjectId,
            ref: 'AttachedFacility',
        },
    ],
    facilityAccesses: [
        {
            type: Schema.Types.ObjectId,
            ref: 'FacilityAccess',
        },
    ],
    loginHistories: [
        {
            type: Schema.Types.ObjectId,
            ref: 'LoginHistory',
        },
    ],
    serviceQueues: [
        {
            type: Schema.Types.ObjectId,
            ref: 'ServiceQueue',
        },
    ],
    referralModules: [
        {
            type: Schema.Types.ObjectId,
            ref: 'ReferralModule',
        },
    ],
});

// add base schema
applyBaseSchema(facilitySchema);

// create model
const Facility = model('Facility', facilitySchema);

// export model
module.exports = Facility;
