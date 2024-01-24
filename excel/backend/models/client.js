const { model, Schema } = require('mongoose');
const { maritalStatus } = require('../constraints/enumerators');
const applyBaseSchema = require('./baseSchema');

const clientSchema = new Schema({
    OID: {
        type: String,
        required: true,
        unique: true,
    },
    firstname: {
        type: String,
        required: true,
        maxlength: 60,
        minlength: 2,
        validate: {
            validator(value) {
                // Custom validation logic for country code
                return /^[a-zA-Z]{2}$/.test(value);
            },
            message: 'Invalid country code.',
        },
        match: /^[a-zA-Z ]+$/,
        trim: true,
    },
    surname: {
        type: String,
        required: true,
        maxlength: 60,
        minlength: 2,
        match: /^[a-zA-Z ]+$/,
        trim: true,
    },
    sex: {
        type: String,
        required: true,
        enum: ['Male', 'Female'],
    },
    dob: {
        type: Date,
        required: true,
    },
    isDOBEstimated: {
        type: Boolean,
        required: true,
    },
    NRC: {
        type: String,
        required: true,
        maxlength: 11,
        match: /^[0-9]{6}\/[0-9]{2}\/[0-9]$/,
    },
    noNRC: {
        type: Boolean,
        required: true,
    },
    NAPSANumber: {
        type: String,
        maxlength: 20,
        trim: true,
    },
    underFiveCardNumber: {
        type: String,
        maxlength: 20,
        trim: true,
    },
    NUPN: {
        type: String,
        maxlength: 30,
        trim: true,
    },
    registrationDate: {
        type: Date,
        required: true,
    },
    fathersFirstName: {
        type: String,
        maxlength: 60,
        minlength: 2,
        match: /^[a-zA-Z ]+$/,
        trim: true,
    },
    fathersSurname: {
        type: String,
        maxlength: 60,
        minlength: 2,
        match: /^[a-zA-Z ]+$/,
        trim: true,
    },
    fathersNRC: {
        type: String,
        maxlength: 11,
        match: /^[0-9]{6}\/[0-9]{2}\/[0-9]$/,
    },
    fatherNAPSANumber: {
        type: String,
        maxlength: 20,
        trim: true,
    },
    fatherNationality: {
        type: Number,
    },
    isFatherDeceased: {
        type: Boolean,
        default: false,
    },
    mothersFirstName: {
        type: String,
        maxlength: 60,
        minlength: 2,
        match: /^[a-zA-Z ]+$/,
        trim: true,
    },
    mothersSurname: {
        type: String,
        maxlength: 60,
        minlength: 2,
        match: /^[a-zA-Z ]+$/,
        trim: true,
    },
    mothersNRC: {
        type: String,
        maxlength: 11,
        match: /^[0-9]{6}\/[0-9]{2}\/[0-9]$/,
    },
    motherNAPSANumber: {
        type: String,
        maxlength: 20,
        trim: true,
    },
    motherNationality: {
        type: Number,
    },
    isMotherDeceased: {
        type: Boolean,
        default: false,
    },
    guardiansFirstName: {
        type: String,
        maxlength: 60,
        minlength: 2,
        match: /^[a-zA-Z ]+$/,
        trim: true,
    },
    guardiansSurname: {
        type: String,
        maxlength: 60,
        minlength: 2,
        match: /^[a-zA-Z ]+$/,
        trim: true,
    },
    guardiansNRC: {
        type: String,
        maxlength: 11,
        match: /^[0-9]{6}\/[0-9]{2}\/[0-9]$/,
    },
    guardianNAPSANumber: {
        type: String,
        maxlength: 20,
        trim: true,
    },
    guardianNationality: {
        type: Number,
    },
    isGuardianDeceased: {
        type: Boolean,
        default: false,
    },
    isRegisteredAtBirth: {
        type: Boolean,
        required: true,
    },
    placeOfBirth: {
        type: String,
        maxlength: 150,
        trim: true,
    },
    nationality: {
        type: Number,
    },
    countryOfBirth: {
        type: String,
        maxlength: 3,
        trim: true,
    },
    countryOfResidence: {
        type: String,
        maxlength: 3,
        trim: true,
    },
    districtOfResidence: {
        type: String,
        maxlength: 60,
        trim: true,
    },
    wardOfResidence: {
        type: String,
        maxlength: 60,
        trim: true,
    },
    villageOfResidence: {
        type: String,
        maxlength: 60,
        trim: true,
    },
    villageId: {
        type: String,
        maxlength: 16,
        trim: true,
    },
    headOfHouseholdID: {
        type: String,
        maxlength: 36,
        trim: true,
    },
    householdPosition: {
        type: Number,
    },
    hasSpouse: {
        type: Boolean,
        required: true,
    },
    spouseFirstName: {
        type: String,
        maxlength: 60,
        minlength: 2,
        match: /^[a-zA-Z ]+$/,
        trim: true,
    },
    spouseSurname: {
        type: String,
        maxlength: 60,
        minlength: 2,
        match: /^[a-zA-Z ]+$/,
        trim: true,
    },
    spouseNRC: {
        type: String,
        maxlength: 11,
        match: /^[0-9]{6}\/[0-9]{2}\/[0-9]$/,
    },
    spouseNAPSANumber: {
        type: String,
        maxlength: 20,
        trim: true,
    },
    spouseNationality: {
        type: Number,
    },
    isSpouseDeceased: {
        type: Boolean,
        default: false,
    },
    maritalStatus: {
        type: String,
        maxlength: 10,
        enum: [...maritalStatus],
    },
    educationLevel: {
        type: Number,
    },
    occupation: {
        type: Number,
    },
    employerName: {
        type: String,
        maxlength: 150,
        trim: true,
    },
    phoneNumber: {
        type: String,
        maxlength: 15,
        trim: true,
    },
    mobileNumber: {
        type: String,
        maxlength: 15,
        trim: true,
    },
    emailAddress: {
        type: String,
        maxlength: 100,
        trim: true,
    },
    physicalAddress: {
        type: String,
        maxlength: 150,
        trim: true,
    },
    postalAddress: {
        type: String,
        maxlength: 150,
        trim: true,
    },
    countryOfCitizenship: {
        type: String,
        maxlength: 3,
        trim: true,
    },
});

// add base schema to client schema
applyBaseSchema(clientSchema);

// create client model
const Client = model('Client', clientSchema);

// export client model
module.exports = Client;
