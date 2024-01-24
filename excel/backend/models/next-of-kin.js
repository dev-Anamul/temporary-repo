const { model, Schema } = require('mongoose');
const applyBaseSchema = require('./baseSchema');

// Define the NextOfKin schema
const nextOfKinSchema = new Schema({
    interactionId: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
        maxlength: 60,
    },
    surname: {
        type: String,
        required: true,
        maxlength: 60,
    },
    nextOfKinType: {
        type: String,
        required: true,
    },
    otherNextOfKinType: {
        type: String,
        maxlength: 90,
    },
    houseNumber: {
        type: String,
        maxlength: 20,
    },
    streetName: {
        type: String,
        maxlength: 90,
    },
    township: {
        type: String,
        maxlength: 90,
    },
    cheifName: {
        type: String,
        maxlength: 120,
    },
    cellphoneCountryCode: {
        type: String,
        required: true,
        maxlength: 4,
    },
    cellPhone: {
        type: String,
        required: true,
        maxlength: 20,
    },
    otherCellphoneCountryCode: {
        type: String,
        maxlength: 4,
    },
    otherCellPhone: {
        type: String,
        maxlength: 20,
    },
    emailAddress: {
        type: String,
        maxlength: 60,
    },
    clientID: {
        type: Schema.Types.ObjectId,
        ref: 'Client',
        required: true,
    },
});

// add base schema
applyBaseSchema(nextOfKinSchema);

// create model
const NextOfKin = model('NextOfKin', nextOfKinSchema);

// export model
module.exports = NextOfKin;
