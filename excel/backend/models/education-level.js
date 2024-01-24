const { model, Schema } = require('mongoose');
const applyBaseSchema = require('./baseSchema');

// Define the EducationLevel schema
const educationLevelSchema = new Schema({
    educationLevels: {
        type: String,
        required: true,
        maxlength: 90,
    },
});

// add base schema
applyBaseSchema(educationLevelSchema);

// create model
const EducationLevel = model('EducationLevel', educationLevelSchema);

// export model
module.exports = EducationLevel;
