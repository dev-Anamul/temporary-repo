const { model, Schema } = require('mongoose');
const applyBaseSchema = require('./baseSchema');

// Define the HomeLanguage schema
const homeLanguageSchema = new Schema({
    language: {
        type: String,
        required: true,
        maxlength: 90,
    },
});

// add base schema
applyBaseSchema(homeLanguageSchema);

// create model
const HomeLanguage = model('HomeLanguage', homeLanguageSchema);

// export model
module.exports = HomeLanguage;
