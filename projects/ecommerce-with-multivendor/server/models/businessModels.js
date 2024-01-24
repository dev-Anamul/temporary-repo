const { Schema, model } = require('mongoose');

const businessSchema = new Schema({
    shopName: {
        type: String,
        required: [true, 'A business must have a shop name'],
        trim: true,
    },
    shopAddress: {
        type: String,
        required: [true, 'A business must have a shop address'],
        trim: true,
    },
    shopCity: {
        type: String,
        required: [true, 'A business must have a shop city'],
        trim: true,
    },
    shopState: {
        type: String,
    },
    shopCountry: {
        type: String,
        required: [true, 'A business must have a shop country'],
        trim: true,
    },
    shopPincode: {
        type: String,
    },
    shopMobile: {},
    shopWebsite: {},
    shopEmail: {},
    addressProof: {},
    addressProofImage: {},
    businessLicenseNumber: {},
    gstNumber: {},
    panNumber: {},
});

const Business = model('Business', businessSchema);
module.exports = Business;
